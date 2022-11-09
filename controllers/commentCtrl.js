const commentModel = require("../models/commentModel");
const BasePost = require("./BasePost");
class Comment extends BasePost {
   findSingleBasePost = async (idPost, page = 1, limit = 10) => {
      return await this._model
         .find({ idPost })
         .skip((page - 1) * limit)
         .limit(limit);
   };
}
const comment = new Comment(commentModel);

module.exports = comment;
