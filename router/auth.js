const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authCtrl");
const { asyncWrapper } = require("../middlewares/asyncWrapper");

router.post(
   "/login",
   asyncWrapper(async (req, res) => {
      const { username, password } = req.body;
      const result = await login(username, password);
      res.status(200).json(result);
   })
);

router.post(
   "/register",
   asyncWrapper(async (req, res) => {
      const { username, email, password } = req.body;
      const newUser = await register(username, email, password);
      res.status(201).json(newUser);
   })
);

module.exports = router;
