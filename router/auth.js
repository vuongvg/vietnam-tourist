const express = require("express");
const router = express.Router();
//const customError = require("../errors/customError");
const AuthCtrl = require("../controllers/authCtrl");

router.post("/login", async (req, res) => {
   try {
      const loginStatus = await AuthCtrl.login(
         req.body.username,
         req.body.password
      );

      res.send(loginStatus);
   } catch(err) {
      res.send({
         status:400,
         message:"Login failed"
      });
   }
});

router.post("/register", async (req, res) => {
   try {
      const newUser = await AuthCtrl.register(
         req.body.username,
         req.body.email,
         req.body.password,
         req.body.phone
      );

      res.send(newUser);
   } catch (err) {
      console.log(`  ~ err`, err)
      res.send({
         status:400,
         message:"Inserting failed"
      });
   }
});

module.exports = router;
