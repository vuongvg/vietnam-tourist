const blog = require("../controllers/blogCtrl");
const adminMdw = require("../middlewares/adminMdw");
const BaseRouter = require("./BaseRouter");

class BlogRouter extends BaseRouter {}
const router = new BlogRouter({...blog,middlewareRole:adminMdw});

module.exports = router;
