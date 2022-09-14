const { customError } = require("../errors/customError");
class BasePost {
   constructor(model) {
      this._model = model;
   }

   findSingleBasePost = async (_id) => {
      return await this._model.findOne({ _id });
   };

   findAllBasePost = async (query, page = 1, limit = 10) => {
      return this._model
         .find(query ?  query  : {})
         .skip((page - 1) * limit)
         .limit(limit);
   };

   createBasePost = async (data) => {
      return this._model.create(data);
   };

   updateBasePost = async (_id, data, user) => {
      const post = await this._model.findOne({ _id });
      if (post.createBy._id.toString() !== user._id.toString()) throw customError(405, "Method Not Allowed");
      return this._model.updateOne({ _id }, data);
   };
 
   deleteBasePost = async (_id, user) => { 
      const post = await this._model.findOne({ _id });
      if (post.createBy._id.toString() !== user._id.toString() && user.role !== "admin") throw customError(405, "Method Not Allowed");
      return this._model.deleteOne({ _id });
   };
}

module.exports = BasePost;
