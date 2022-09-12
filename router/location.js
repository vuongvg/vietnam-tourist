const location = require("../controllers/locationCtrl");
const adminMdw = require("../middlewares/adminMdw");
const BaseRouter = require("./BaseRouter");

class LocationRouter extends BaseRouter {}
const router = new LocationRouter({...location,middlewareRole:adminMdw});

module.exports = router;
