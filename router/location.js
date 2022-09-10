const { createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost } = require("../controllers/locationCtrl");
const BaseRouter = require("./BaseRouter");

class LocationRouter extends BaseRouter {}
const router = new LocationRouter({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost });

module.exports = router;
