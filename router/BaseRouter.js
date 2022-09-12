const { Router } = require("express");
const { createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost } = require("../controllers/BasePost");

class BaseRouter extends Router {
   constructor({ createBasePost, deleteBasePost, findAllBasePost, findSingleBasePost, updateBasePost }) {
      super();
      this._createBasePost = createBasePost;
      this._deleteBasePost = deleteBasePost;
      this._findSingleBasePost = findSingleBasePost;
      this._updateBasePost = updateBasePost;
      this._findAllBasePost = findAllBasePost;

      this.get("/", async (req, res) => {
         const result = await this._findAllBasePost(req.query.idpost, req.query.page, req.query.limit);
         res.status(200).json(result);
      });

      this.get("/:id", async (req, res) => {
         const result = await this._findSingleBasePost(req.params.id, req.query.page, req.query.limit);
         res.status(200).json(result);
      });

      this.delete("/:id", async (req, res) => {
         const result = await this._deleteBasePost(req.params.id);
         res.status(200).json(result);
      });

      this.post("/", async (req, res) => {
         const result = await this._createBasePost(req.body);
         res.status(201).json(result);
      });

      this.patch("/:id", async (req, res) => {
         const result = await this._updateBasePost(req.params.id, req.body);
         res.status(200).json(result);
      });
   }
}

module.exports = BaseRouter;
