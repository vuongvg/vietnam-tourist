const PostRouteDoc = require("./baseRouter.doc");

const idTest = "634ed53bb7da11d2b1c58e2d";

const newUser = {
   username: "test01",
   email: "test@email.com",
   password: "123456",
};

const user = {
   _id: "631eaed5f9b0364d944a9be1",
   username: "vuongcdt2",
   email: "vuongcdt2@gmail.com",
   phone: "0977503406",
   salt: "692c0338fbbe05d38cc0a9813f3d97cd349bda72eadacc3030641d66515646726c9bf04f736b17ed5ea4031fb786e7f471594a05c7a3115f90e6da1ec22eba4da602c09c43e4492964998a502697942ab310fad0bc0753e4e3e29a053f6e60dc4cf0df9e1ab704b2a4fee3e56993e74dad58134011969eecda293e9d0159207e",
   hash: "58a1962fd2ebdb6476f1dbad80467b44cbd81f06f5cb8a841a2200e26df3f2e448418912333d51ad8209cdb6b970a762a5294848f343ee4a5a124e642b357f38",
   role: "user",
   __v: 0,
   updatedAt: "2022-10-20T17:10:10.615Z",
};

const { listPost, createPost, getPostById, updatePostById, deletePostById } = new PostRouteDoc({
   tag: "user",
   newPost: newUser,
   post: user,
   idTest: idTest,
});

exports.userRouteDoc = {
   "/user": {
      get: listPost,
   },
   "/user/{id}": {
      get: getPostById,
      patch: updatePostById,
   },
};
