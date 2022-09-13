const BaseRouter = require("./BaseRouter");
const hotelCtrl= require("../controllers/hotelCtrl");
class HotelRouter extends BaseRouter {}
const router = new HotelRouter(hotelCtrl);

module.exports = router; 