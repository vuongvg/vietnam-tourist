const express = require("express");
const { createPost, deletePost, findAllPost, findSinglePost, updatePost } = require("../controllers/postCtrl");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const router = express.Router();

router.get(
   "/",
   asyncWrapper(async (req, res) => {
      const result = await findAllPost(req.query.page, req.query.limit);
      res.status(200).json(result);
   })
);

router.get(
   "/:id",
   asyncWrapper(async (req, res) => {
      const result = await findSinglePost(req.params.id);
      res.status(200).json(result);
   })
);

router.delete(
   "/:id",
   asyncWrapper(async (req, res) => {
      const result = await deletePost(req.params.id);
      res.status(200).json(result);
   })
);

router.post(
   "/",
   asyncWrapper(async (req, res) => {
      const result = await createPost(req.body);
      res.status(201).json(result);
   })
);

router.patch(
   "/:id",
   asyncWrapper(async (req, res) => {
      const result = await updatePost(req.params.id, req.body);
      res.status(201).json(result);
   })
);

module.exports = router;
