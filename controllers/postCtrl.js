const Post = require("../models/postModel");

const findSinglePost = async (_id) => {
   return Post.findOne({ _id });
};

const findAllPost = async () => {
   return Post.find({}).limit(20);
};

const createPost = async (data) => {
   return Post.create(data);
};

const deletePost = async (_id) => {
   return Post.deleteOne({ _id });
};

const updatePost = async (_id, data) => {
   return Post.updateOne({ _id }, data);
};

module.exports = { createPost, deletePost, findAllPost, findSinglePost, updatePost };
