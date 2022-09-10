const { createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost } = require("../controllers/tourCtrl");
const BaseRouter = require("./BaseRouter");

class TourRouter extends BaseRouter {}
const router = new TourRouter({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost });


module.exports = router;
