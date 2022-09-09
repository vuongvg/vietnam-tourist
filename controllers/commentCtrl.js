const Comment = require("../models/commentModel");

exports.createComment = async (data) => {
   return await Comment.create(data);
};

exports.updateComment = async (_id, data) => {
   return await Comment.update({ _id }, data);
};

exports.findCommentById = async (idPost) => {
   return await Comment.find({ idPost }).limit(10);
};
