const express = require("express");
const router = express.Router();
const restaurantCtrl = require("../controllers/hotelCtrl");
const { authMdw } = require("../middlewares/authMdw");

router.get("/", async (req, res) => {
   const result = await restaurantCtrl.getAllRestaurant();

   res.json(result);
});

router.get("/:id", async (req, res) => {
   const result = await restaurantCtrl.getOneRestaurant();

   res.json(result);
});

router.post("/", authMdw, async (req, res) => {
   const result = await restaurantCtrl.createRestaurant(req.body);

   res.json(result);
});

router.patch("/:id", authMdw, async (req, res) => {
   const result = await restaurantCtrl.updateRestaurant(req.params.id, req.body);

   res.json(result);
});

router.delete("/:id", authMdw, async (req, res) => {
   const result = await restaurantCtrl.deleteRestaurant(req.params.id);

   res.json(result);
});

module.exports = router;