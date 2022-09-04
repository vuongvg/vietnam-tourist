const express = require("express");
const router = express.Router();
const customError = require("../errors/customError");
const AuthCtrl = require("../controllers/authCtrl");

router.post("/login", (req, res) => {
   res.send("router login");
});

router.post("/register", async (req, res) => {
   if(!req.body.password || req.body.password.length < 6) {
      return customError(1,"Mật khẩu cần có ít nhất 6 ký tự!");
   }

   try {
      const newUser = await AuthCtrl.register(
         req.body.username,
         req.body.email,
         req.body.password,
         req.body.phone
      );
      res.send("OK");
      // res.json(newUser);
   } catch (err) {
      res.send("Lỗi");
      // return customError(1,"Tài khoản hoặc mật khẩu không chính xác!");
   }
});

module.exports = router;
