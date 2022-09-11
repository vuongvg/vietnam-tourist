const { createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost } = require("../controllers/blogCtrl");

const BaseRouter = require("./BaseRouter");

class BlogRouter extends BaseRouter {}
const router = new BlogRouter({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost });

module.exports = router;
