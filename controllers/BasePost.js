class BasePost {
   constructor(model) {
      this._model = model;
   }

   findSingleBasePost = async (_id) => {
      return await this._model.findOne({ _id });
   };

   findAllBasePost = async (idPost, page = 1, limit = 10) => {
      return this._model
         .find(idPost ? { idPost } : {})
         .skip((page - 1) * limit)
         .limit(limit);
   };

   createBasePost = async (data) => {
      return this._model.create(data);
   };

   updateBasePost = async (_id, data) => {
      return this._model.updateOne({ _id }, data);
   };

   deleteBasePost = async (_id) => {
      return this._model.deleteOne({ _id });
   };
}

module.exports = BasePost;
