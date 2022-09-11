const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const { authMdw } = require("../middlewares/authMdw");
const router = express.Router();

router.get("/:id", authMdw, async(req, res) => {
   try { 
      const userInfor = await userCtrl.getUserInforById(req.params.id);
   } catch (err) {
      res.send({
         status:400,
         message:"Getting user information failed"
      });
   }
});

router.patch("/update/:id", authMdw, async (req, res) => {
   try {
      const updatedUser = await userCtrl.updateUser(req.params.id,req.body);

      res.send(updatedUser);
   } catch (err) {
      res.send({
         status:400,
         message:"Updating user information failed"
      })
   }
});

module.exports = router;
