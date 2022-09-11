const express = require("express");
const router = express.Router();
const hotelCtrl = require("../controllers/hotelCtrl");
const { authMdw } = require("../middlewares/authMdw");

router.get("/", async (req, res) => {
   try {
      const hotelsList = await hotelCtrl.getListHotel();

      res.send(hotelsList);
   } catch (err) {
      console.log(err);
      res.send({
         status:400,
         message:"Getting hotels list failed"
      });
   }
});

router.post("/", authMdw, async(req, res) => {
   try {
      const hotelInfor =  await hotelCtrl.createNewHotel(req.body);

      res.send(hotelInfor);
   } catch (err) {
      res.send({
         status:400,
         message:"Creating new hotel information failed"
      });
   }
});


module.exports = router;