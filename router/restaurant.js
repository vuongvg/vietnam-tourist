const restaurantCtrl = require("../controllers/restaurantCtrl");
const BaseRouter = require("./BaseRouter");
class RestaurantRouter extends BaseRouter {}
const router = new RestaurantRouter(restaurantCtrl);

module.exports = router;