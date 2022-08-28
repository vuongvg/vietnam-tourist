const { customError } = require("../errors/customError");
const Post = require("../models/postModel");

const findSinglePost = async (_id) => {
   try {
      return Post.findOne({ _id });
   } catch (error) {
      return customError(400, error.message);
   }
};

const findAllPost = async () => {
   try {
      return Post.find({}).limit(20);
   } catch (error) {
      return customError(400, error.message);
   }
};

const createPost = async (data) => {
   try {
      return Post.create(data);
   } catch (error) {
      return customError(400, error.message);
   }
};

const deletePost = async (_id) => {
   try {
      return Post.deleteOne({ _id });
   } catch (error) {
      return customError(400, error.message);
   }
};

const updatePost = async (_id, data) => {
   try {
      return Post.updateOne({ _id }, data);
   } catch (error) {
      return customError(400, error.message);
   }
};

module.exports = { createPost, deletePost, findAllPost, findSinglePost, updatePost };
