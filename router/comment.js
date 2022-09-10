const BaseRouter = require("./BaseRouter");
const { findCommentByIdBlog, createBasePost, deleteBasePost, findSingleBasePost, updateBasePost } = require("../controllers/commentCtrl");
class CommentRouter extends BaseRouter {
   constructor({ createBasePost, updateBasePost, findAllBasePost }) {
      super({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost });
   }
}
const router = new CommentRouter({ createBasePost, updateBasePost, findAllBasePost: findCommentByIdBlog });

module.exports = router;
