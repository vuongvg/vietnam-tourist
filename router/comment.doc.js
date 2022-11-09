const PostRouteDoc = require("./baseRouter.doc");

const idTest = "631b54fb72e4f5eebe03a65d";

const newComment = {
   idPost: "631b54fb72e4f5eebe03a65d",
   comment: "hay qua",
};

const comment = {
   _id: "63581631f1dde498dc799586",
   ...newComment,
   like: 0,
   createBy: {
      _id: "631eaef1f9b0364d944a9beb",
      username: "vuongcdt",
   },
   typePost: "blog",
   createdAt: "2022-10-25T17:00:33.597Z",
   updatedAt: "2022-10-25T17:00:33.597Z",
};

const { listPost, createPost, getPostById, updatePostById, deletePostById } = new PostRouteDoc({
   tag: "comment",
   newPost: newComment,
   post: comment,
   idTest: idTest,
});

exports.commentRouteDoc = {
   "/comment": {
      get: listPost,
      post: createPost,
   },
   "/comment/{id}": {
      get: getPostById,
      patch: updatePostById,
      delete: deletePostById,
   },
};
