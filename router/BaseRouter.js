const { Router } = require("express");
const { asyncWrapper } = require("../middlewares/asyncWrapper");
class BaseRouter extends Router {
   constructor({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost, middlewareRole }) {
      super();
      this._createBasePost = createBasePost;
      this._deleteBasePost = deleteBasePost;
      this._findSingleBasePost = findSingleBasePost;
      this._updateBasePost = updateBasePost;
      this._findAllBasePost = findAllBasePost;

      this.get(
         "/",
         asyncWrapper(async (req, res) => {
            const { page = 1, limit = 10} = req.query;
            const result = await this._findAllBasePost(req.query, page, limit);
            res.header("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Expose-Headers", "X-Total-Count,Content-Range,X-Count");
            res.setHeader("X-Total-Count", result.total);
            res.setHeader("X-Count", result.data.length);
            res.setHeader("Content-Range", `posts ${(+page - 1) * +limit} - ${(+page - 1) * +limit + result.data.length}/${result.total}`);
            // console.log(`  ~ (+page - 1) * +limit`, (+page - 1) * +limit)
            res.status(200).json(result.data.map((item) => ({ ...item, id: item._id })));
            // res.status(200).json(result.data);
         })
      );

      this.get(
         "/:id",
         asyncWrapper(async (req, res) => {
            const result = await this._findSingleBasePost(req.params.id, req.query.page, req.query.limit);
            res.status(200).json({ ...result, id: result._id });
         })
      );

      middlewareRole && this.use(middlewareRole);

      this.post(
         "/",
         asyncWrapper(async (req, res) => {
            const result = await this._createBasePost({ ...req.body, createBy: req.user });
            res.status(201).json(result);
         })
      );

      this.patch(
         "/:id",
         asyncWrapper(async (req, res) => {
            const result = await this._updateBasePost(req.params.id, req.body, req.user);
            res.status(200).json(result);
         })
      );

      this.delete(
         "/:id",
         asyncWrapper(async (req, res) => {
            const result = await this._deleteBasePost(req.params.id, req.user);
            res.status(200).json(result);
         })
      );
   }
}

module.exports = BaseRouter;
