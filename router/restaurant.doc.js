const PostRouteDoc = require("./baseRouter.doc");

const idTest = "631f5ce934dbea6679e3b899";

const newRestaurant = {
   title: "Buffet Sen Ho Tay",
   email: "sentayho123@gmail.com",
   phone: "0256366687",
   city: "Ha Noi",
   fullLocation: "614 Lạc Long Quân, Tây Hồ, Hà Nội",
   gmaplink: "https://goo.gl/maps/QAtrWC6JUGhpbPRe9",
   avatar: {
      src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
   },
   album: [
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
      {
         src: "https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg",
      },
   ],
   content: "No one ever expects the unexpected but it’s always great to have a safeguard just in case.",
   description:
      "Hệ thống nhà hàng SEN là chuỗi nhà hàng ẩm thực Buffet đầu tiên tại Việt Nam. Buffet từ lâu đã được ưa chuộng ở Châu Âu, xuất hiện lần đầu tiên vào thế kỷ 17 tại Pháp. Với một hình thức ăn uống mới mẻ, phong phú về thực đơn , tinh tế về hình thức và chất lượng trong từng món ăn.",
};

const restaurant = {
   _id: "631f5ce934dbea6679e3b899",
   ...newRestaurant,
   createBy: {
      _id: "631eaef1f9b0364d944a9beb",
      username: "vuongcdt",
   },
   createdAt: "2022-09-12T16:23:05.364Z",
   updatedAt: "2022-10-27T15:15:15.390Z",
};

const { listPost, createPost, getPostById, updatePostById, deletePostById } = new PostRouteDoc({
   tag: "restaurant",
   newPost: newRestaurant,
   post: restaurant,
   idTest: idTest,
});

exports.restaurantRouteDoc = {
   "/restaurant": {
      get: listPost,
      post: createPost,
   },
   "/restaurant/{id}": {
      get: getPostById,
      patch: updatePostById,
      delete: deletePostById,
   },
};
