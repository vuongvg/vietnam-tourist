const express = require("express");
const { findCommentById, createComment, updateComment } = require("../controllers/commentCtrl");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const router = express.Router();

router.post(
   "/",
   asyncWrapper(async (req, res) => {
      const result = await createComment(req.body);
      res.status(200).json(result);
   })
);

router.patch(
   "/:idComment",
   asyncWrapper(async (req, res) => {
      const result = await updateComment(req.params.idComment, req.body);
      res.status(200).json(result);
   })
);

router.get(
   "/:idPost",
   asyncWrapper(async (req, res) => {
      const result = await findCommentById(req.params.idPost);
      res.status(200).json(result);
   })
);

module.exports = router;
