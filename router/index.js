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
const adminRouter = require("./admin");
const searchRouter = require("./search");


router.use("/tour", tourRouter);
router.use("/location", locationRouter);
router.use("/restaurant", restaurantRouter);
router.use("/hotel", hotelRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/blog", blogRouter);
router.use("/comment", commentRouter);
router.use("/admin", adminRouter); 
router.use("/search", searchRouter); 

module.exports = router;

/**
 * @swagger
 * /blog:
 *   get:
 *     responses:
 *       200:
 *         description: A list of blog.
*/

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A blog.
*/

/**
 * @swagger
 * /blog/:
 *   post:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A blog.
*/