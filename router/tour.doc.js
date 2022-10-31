const PostRouteDoc = require("./baseRouter.doc");

const idTest = "6347d6ed61381330fa2f3397";

const newTour = {
   title: "2 Nights on BEST BALCONY CRUISES: All-Inclusive package",
   content: "English Speaking Guide, Entrance, Boat trip & Bikes, A delicious local lunch, Bus transfers from Hanoi & returns",
   avatar: {
      src: "https://www.planetware.com/photos-large/VIE/vietnam-hoi-an-riverfront.jpg",
   },
   description:
      "Escape the bustling confines of Hanoi city, and breath the fresh air on this full-day rural Vietnam tour. With a local lunch of goat meat, fried rice and local fruits onboard, you’ll be fueled for an afternoon of action, taking in the scenery by both bamboo boat and mountain bike. See local villagers going about their daily lives as you come to appreciate a quieter slice of Vietnamese culture.",
   location: "Hoa Lư,Ninh Bình, Việt Nam",
   province: "Ninh Bình",
   price: 55,
   regularPrice: 55,
   transfer: "Camper van",
};

const tour = {
   _id: "6347d6ed61381330fa2f3397",
   ...newTour,
   discount: "",
   depart: "",
   createBy: {
      _id: "6321d39ebe7bf2286b823b33",
      username: "dominhhieu",
   },
   typePost: "tour",
   createdAt: "2022-10-13T09:14:21.187Z",
   updatedAt: "2022-10-27T15:15:13.052Z",
};

const { listPost, createPost, getPostById, updatePostById, deletePostById } = new PostRouteDoc({
   tag: "tour",
   newPost: newTour,
   post: tour,
   idTest: idTest,
});

exports.tourRouteDoc = {
   "/tour": {
      get: listPost,
      post: createPost,
   },
   "/tour/{id}": {
      get: getPostById,
      patch: updatePostById,
      delete: deletePostById,
   },
};
