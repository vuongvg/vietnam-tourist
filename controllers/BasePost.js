const { customError } = require("../errors/customError");
class BasePost {
   constructor(model) {
      this._model = model;
      this.findSingleBasePost = async (_id) => {
         const result = await this._model.findOne({ _id }).lean();
         console.log(`  ~ result`, result)
         return result;
      };

      this.findAllBasePost = async (query, page, limit) => {
         const [fieldRange, min, max] = query.range ? JSON.parse(query.range) : [null, null, null];
         const [fieldSearch, keyword] = query.search ? JSON.parse(query.search) : [null, null];

         const entry = {
            $and: [
               query.exclude ? { _id: { $ne: query.exclude } } : {},
               query.range ? { [fieldRange]: { $gte: min, $lte: max } } : {},
               query.filter ? JSON.parse(query.filter) : {},
               query.search ? { [fieldSearch]: { $regex: RegExp(keyword.replace("_", " ")), $options: "i" } } : {},
            ],
         };

         const [data, total] = await Promise.all([
            this._model
               .find(entry)
               .sort(query.sort && JSON.parse(query.sort))
               .skip((page - 1) * limit)
               .limit(limit)
               .lean(),
            this._model.count(entry),
         ]);

         return { data, total };
      };

      this.createBasePost = async (data) => {
         return await this._model.create(data);
      };

      this.updateBasePost = async (_id, data, user) => {
         const post = await this._model.findOne({ _id });
         if (post.createBy._id.toString() !== user._id.toString() && user.role !== "admin") throw customError(405, "Method Not Allowed");
         return this._model.updateOne({ _id }, data);
      };

      this.deleteBasePost = async (_id, user) => {
         const post = await this._model.findOne({ _id });
         if (post.createBy._id?.toString() !== user._id.toString() && user.role !== "admin") throw customError(405, "Method Not Allowed");
         return this._model.deleteOne({ _id });
      };
   }
}

module.exports = BasePost;
