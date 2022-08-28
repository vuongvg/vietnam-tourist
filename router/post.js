const express = require("express");
const { createPost, deletePost, findAllPost, findSinglePost, updatePost } = require("../controllers/postCtrl");
const router = express.Router();

router.get("/", async (req, res) => {
   const result = await findAllPost();
   res.json(result);
});

router.get("/:id", async (req, res) => {
   const result = await findSinglePost(req.params.id);
   res.json(result);
});

router.delete("/:id", async (req, res) => {
   const result = await deletePost(req.params.id);
   res.json(result);
});

router.post("/", async (req, res) => {
   const result = await createPost(req.body);
   res.status(201).json(result);
});

router.patch("/:id", async(req, res) => {
   const result = await updatePost(req.params.id,req.body);
   res.status(201).json(result);
});

module.exports = router;
