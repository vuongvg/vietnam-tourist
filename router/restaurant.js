const restaurantCtrl = require("../controllers/restaurantCtrl");
const adminMdw = require("../middlewares/adminMdw");
const BaseRouter = require("./BaseRouter");


class RestaurantRouter extends BaseRouter {}
const router = new RestaurantRouter({...restaurantCtrl,middlewareRole:adminMdw});

module.exports = router;


