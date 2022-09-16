const BaseRouter = require("./BaseRouter");
const hotelCtrl= require("../controllers/hotelCtrl");
const adminMdw = require("../middlewares/adminMdw");

class HotelRouter extends BaseRouter {}
const router = new HotelRouter({...hotelCtrl,middlewareRole:adminMdw});

module.exports = router;
 