const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const { authMdw } = require("../middlewares/authMdw");
const router = express.Router();

router.get("/:id", async(req, res) => {
   res.send("gettting user information");
});

router.patch("/update/:id", authMdw, async (req, res) => {
   try {
      console.log(req.user);
      res.send("update");
      // const updateInfor = {
      //    user
      // }
   } catch (err) {
      return {
         status:400,
         message:"Updating user information failed"
      }
   }
});

module.exports = router;
