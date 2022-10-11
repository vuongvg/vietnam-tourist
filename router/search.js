const express = require("express");
const { default: mongoose } = require("mongoose");
const { searchAllPostByKeyword } = require("../controllers/searchCtrl");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const router = express.Router();

router.get(
   "/",
   asyncWrapper(async (req, res) => {
      const result = await searchAllPostByKeyword(req.query.keyword);
      res.send(result);
   })
);

module.exports = router;
