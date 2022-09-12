const BaseRouter = require("./BaseRouter");
const comment = require("../controllers/commentCtrl");
const { authMdw } = require("../middlewares/authMdw");
class CommentRouter extends BaseRouter {}
const router = new CommentRouter({ ...comment, middlewareRole: authMdw });

module.exports = router;
