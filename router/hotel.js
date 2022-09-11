const express = require("express");
const router = express.Router();
const hotelCtrl = require("../controllers/hotelCtrl");
const { authMdw } = require("../middlewares/authMdw");

router.get("/", async (req, res) => {
   try {
      const hotelsList = await hotelCtrl.getListHotel();

      res.send(hotelsList);
   } catch (err) {
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

router.patch("/:id", authMdw, async(req, res) => {
   try {
      const updatedHotel = await hotelCtrl.updateHotelInfor(req.params.id, req.body);

      res.send({
         status:200,
         data:updatedHotel
      });
   } catch (err) {
      res.send({
         status:400,
         message:"Updating hotel information failed"
      });
   }
});

router.delete("/:id", authMdw, async(req, res) => {
   try {
      const deletedHotel = await hotelCtrl.deleteHotelInfor(req.params.id);

      res.send({
         status:200,
         data:deletedHotel,
         message:"Deleting hotel information successfully"
      });
   } catch (err) {
      res.send({
         status:400,
         message:"Deleting hotel information failed"
      });
   }
});


module.exports = router;