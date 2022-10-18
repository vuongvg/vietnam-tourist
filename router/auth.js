const express = require("express");
const router = express.Router();
const AuthCtrl = require("../controllers/authCtrl");
const { asyncWrapper } = require("../middlewares/asyncWrapper");

router.post(
   "/login",
   asyncWrapper(async (req, res) => {
      const login = await AuthCtrl.login(req.body.username, req.body.password);
      res.status(200).json(login);
   })
);

router.post(
   "/register",
   asyncWrapper(async (req, res) => {
      const newUser = await AuthCtrl.register(req.body.username, req.body.email, req.body.password);
      res.status(201).json(newUser);
   })
);

module.exports = router;
