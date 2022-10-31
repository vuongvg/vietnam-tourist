const PostRouteDoc = require("./baseRouter.doc");

const idTest = "63581631f1dde498dc799586";

const newBlog = {
   title: "Get Travel Insurance",
   content: "No one ever expects the unexpected but it’s always great to have a safeguard just in case.",
   avatar: {
      src: "https://firebasestorage.googleapis.com/v0/b/vietnam-tour-1664730774283.appspot.com/o/image%2F166607841481810-Common-Travel-Mistakes-You-Can-Avoid.jpg?alt=media&token=7b65087f-efe3-4374-94e9-2227a8af93e9",
   },
   description: "Essential travel tip: Get insured!",
};

const blog = {
   _id: "63581631f1dde498dc799586",
   ...newBlog,
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
   tag: "blog",
   newPost: newBlog,
   post: blog,
   idTest:idTest,
});

exports.blogRouteDoc = {
   "/blog": {
      get: listPost,
      post: createPost,
   },
   "/blog/{id}": {
      get: getPostById,
      patch: updatePostById,
      delete: deletePostById,
   },
};
