const express = require("express");

const router = express.Router();
const authRouter = require("./auth");
const blogRouter = require("./blog");
const userRouter = require("./user");
const hotelRouter = require("./hotel");
const tourRouter = require("./tour");
const restaurantRouter = require("./restaurant");
const locationRouter = require("./location");
const commentRouter = require("./comment");

router.use("/tour", tourRouter);
router.use("/location", locationRouter);
router.use("/restaurant", restaurantRouter);
router.use("/hotel", hotelRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/blog", blogRouter);
router.use("/comment", commentRouter);

module.exports = router;
