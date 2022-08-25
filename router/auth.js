const express = require("express");
const router = express.Router();
const customError = require("../errors/customError");

router.post("/login", (req, res) => {
   res.send("router login");
});
router.post("/register", (req, res) => {
   if(!req.body.password || req.body.password.length < 6) {
      return customError(1,"Mật khẩu cần có ít nhất 6 ký tự!");
   }

   try {
      
   } catch (err) {
      return customError(1,"Tài khoản hoặc mật khẩu không chính xác!");
   }
});

module.exports = router;
