const express = require("express");
const { default: mongoose } = require("mongoose");
const { searchAllPostByKeyword } = require("../controllers/searchCtrl");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
const router = express.Router();

router.get(
   "/",
   asyncWrapper(async (req, res) => {
      const { page = 1, limit = 10 ,sort} = req.query;
      const result = await searchAllPostByKeyword(req.query.keyword, page, limit, sort);
      res.header("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Expose-Headers", "X-Total-Count,Content-Range,X-Count,X-Total-Page");
      res.setHeader("X-Total-Count", result.total);
      res.setHeader("X-Total-Page", result.total % limit ? Math.floor(result.total / limit) + 1 : result.total / limit);
      res.setHeader("X-Count", result.data.length);
      res.setHeader("Content-Range", `posts ${(+page - 1) * +limit} - ${(+page - 1) * +limit + result.data.length}/${result.total}`);
      res.json(result);
   })
);

module.exports = router;
