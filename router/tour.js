const tour = require("../controllers/tourCtrl");
const adminMdw = require("../middlewares/adminMdw");
const BaseRouter = require("./BaseRouter");

class TourRouter extends BaseRouter {}
const router = new TourRouter({...tour,middlewareRole:adminMdw});


module.exports = router;
