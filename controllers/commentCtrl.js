const Comment = require("../models/commentModel");

exports.createComment = async (data) => {
   return await Comment.create(data);
};

exports.updateComment = async (_id, data) => {
   return await Comment.update({ _id }, data);
};

exports.findCommentById = async (idPost, page = 1, limit = 10) => {
   return await Comment.find({ idPost })
      .skip((page - 1) * limit)
      .limit(limit);
};
