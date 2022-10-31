const { use } = require("./auth");
const PostRouteDoc = require("./baseRouter.doc");

const idTest = "63581631f1dde498dc799586";

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
   role: "user",
   __v: 0,
   updatedAt: "2022-10-20T17:10:10.615Z",
};

const { createPost } = new PostRouteDoc({
   tag: "auth",
   newPost: newUser,
   post: user,
   idTest: idTest,
});

const loginUser = {
   tags: ["auth"],
   description: `Login account`,
   requestBody: {
      require: true,
      description: `Login account`,
      content: {
         "application/json": {
            schema: {
               type: "object",
               example: {
                  username: "test01",
                  password: "123456",
               },
            },
         },
      },
   },

   responses: {
      200: {
         description: "OK",
         content: {
            "application/json": {
               schema: {
                  type: "object",
                  example: {
                     ...user,
                     token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzVmNzYzNDIwYzE5Zjc0M2U5MzIzOGUiLCJpYXQiOjE2NjcyMDA2MzcsImV4cCI6MTc1MzYwMDYzN30.WOKIfmAvveYTeMqgJp-BA14Uj-ZBEQvS6C5z9tTnFWk",
                  },
               },
            },
         },
      },
   },
};

exports.authRouteDoc = {
   "/auth/register": {
      post: createPost,
   },
   "/auth/login": {
      post: loginUser,
   },
};
