const { Router } = require("express");

class BaseRouter extends Router {
   constructor({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost, middlewareRole }) {
      super();
      this._createBasePost = createBasePost;
      this._deleteBasePost = deleteBasePost;
      this._findSingleBasePost = findSingleBasePost;
      this._updateBasePost = updateBasePost;
      this._findAllBasePost = findAllBasePost;

      this.get("/", async (req, res) => {
         const result = await this._findAllBasePost(req.query, req.query.page, req.query.limit);
         res.status(200).json(result);
      });

      this.get("/:id", async (req, res) => {
         const result = await this._findSingleBasePost(req.params.id, req.query.page, req.query.limit);
         res.status(200).json(result);
      });

      middlewareRole && this.use(middlewareRole);

      this.post("/", async (req, res) => {
         const result = await this._createBasePost({ ...req.body,
             createBy: req.user 
         });
         res.status(201).json(result);
      });

      this.patch("/:id", async (req, res) => {
         const result = await this._updateBasePost(req.params.id, req.body,req.user);
         res.status(200).json(result);
      });

      this.delete("/:id", async (req, res) => {
         const result = await this._deleteBasePost(req.params.id,req.user);
         res.status(200).json(result);
      });
   }
}

module.exports = BaseRouter;
