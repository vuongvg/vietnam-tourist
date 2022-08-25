const express = require("express");
const { userCtrl } = require("../controllers/userCtrl");
const router = express.Router();

router.get("/", async(req, res) => {
   const user=await userCtrl()
   res.send(user);
});

module.exports = router;
