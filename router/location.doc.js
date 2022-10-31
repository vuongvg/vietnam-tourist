const PostRouteDoc = require("./baseRouter.doc");

const idTest = "6347bbfa28b43c92e9b9bcf5";

const newLocation = {
   title: "Halong Bay",
   avatar: {
      src: "https://www.planetware.com/photos-large/VIE/vietnam-halong-bay.jpg",
   },
   description:
      "The karst seascape of Halong Bay is one of the best places to visit in the world for spellbinding sea views and is a UNESCO World Heritage Site.",
};

const location = {
   _id: "6347bbfa28b43c92e9b9bcf5",
   ...newLocation,
   createBy: {
      _id: "6321d39ebe7bf2286b823b33",
      username: "dominhhieu",
   },
   typePost: "location",
   createdAt: "2022-10-13T07:19:22.300Z",
   updatedAt: "2022-10-27T15:15:14.216Z",
};

const { listPost, createPost, getPostById, updatePostById, deletePostById } = new PostRouteDoc({
   tag: "location",
   newPost: newLocation,
   post: location,
   idTest: idTest,
});

exports.locationRouteDoc = {
   "/location": {
      get: listPost,
      post: createPost,
   },
   "/location/{id}": {
      get: getPostById,
      patch: updatePostById,
      delete: deletePostById,
   },
};
