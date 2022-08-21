const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
   res.send("router login");
});
router.post("/register", (req, res) => {
   res.send("router register");
});

module.exports = router;
