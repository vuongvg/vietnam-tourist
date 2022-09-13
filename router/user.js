const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const { authMdw } = require("../middlewares/authMdw");
const router = express.Router();

router.get("/:id",(req,res,next)=> authMdw(req,res,next), async(req, res) => {
   try { 
      const userInfor = await userCtrl.getUserInforById(req.params.id);
      res.status(200).json(userInfor);
   } catch (err) {
      res.status(400).send("Getting user information failed");
   }
});

router.patch("/update/:id", authMdw, async (req, res) => {
   try {
      const updatedUser = await userCtrl.updateUser(req.params.id, req.body);
      res.status(200).json(updatedUser);
   } catch (err) {
      res.status(400).send("Updating user information failed")
   }
});

module.exports = router;
