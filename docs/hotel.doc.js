const PostRouteDoc = require("./baseRouter.doc");

const idTest = "634a8c8c08a59397336fd053";

const newHotel = {
   title: "Intercontinental Hanoi Westlake, An IHG Hotel",
   email: "sale@email.com",
   phone: "0968588188",
   city: "Ha Noi",
   fullLocation: "5 Tu Hoa, Ha Noi",
   avatar: {
      src: "https://www.momondo.com/rimg/himg/27/ed/51/leonardo-1140852-HANHB_4068417527_O-545141.jpg?width=510&height=510&crop=true",
   },
   content: "No one ever expects the unexpected but it’s always great to have a safeguard just in case.",
   description:
      "InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The hotel is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.",
};

const hotel = {
   _id: idTest,
   ...newHotel,
   album: [],
   typePost: "hotel",
   createdAt: "2022-10-15T10:33:48.711Z",
   updatedAt: "2022-10-27T15:15:10.561Z",
   evaluate: 4.5,
   createBy: {
      _id: "631eaef1f9b0364d944a9beb",
      username: "vuongcdt",
   },
   famous: false,
};

const { listPost, createPost, getPostById, updatePostById, deletePostById } = new PostRouteDoc({
   tag: "hotel",
   newPost: newHotel,
   post: hotel,
   idTest:idTest,
});

exports.hotelRouteDoc = {
   "/hotel": {
      get: listPost,
      post: createPost,
   },
   "/hotel/{id}": {
      get: getPostById,
      patch: updatePostById,
      delete: deletePostById,
   },
};
