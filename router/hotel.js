const BaseRouter = require("./BaseRouter");
const hotel= require("../controllers/hotelCtrl");
class HotelRouter extends BaseRouter {}
const router = new HotelRouter(hotel);

module.exports = router; 