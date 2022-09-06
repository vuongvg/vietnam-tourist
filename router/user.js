const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const { authMdw } = require("../middlewares/authMdw");
const router = express.Router();

// router.get("/", async(req, res) => {
//    const user = await userCtrl()
//    res.send(user);
// });

router.patch("/update/:id", authMdw, async (req, res) => {
   try {
      
   } catch (err) {
      return {
         status:400,
         message:"Updating user information failed"
      }
   }
});

module.exports = router;
