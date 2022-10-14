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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
*/

/**
 * @swagger
 * /blog/:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *     responses:
 *       201:
 *         description: Create blog.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The user ID.
 *           example: 63310ae8c894be068fe83640
 *         title:
 *           type: string
 *           description: The blog's title.
 *           example: 10 típ cho người yêu du lịch và đam mê khám phá những vùng đất ban sơ
 *         content:
 *           type: string
 *           description: The blog's content.
 *           example: Thế hệ trẻ ngày nay là một thế hệ bước ra thế giới, một thế hệ phải dịch chuyển nhiều hơn và đi nhiều hơn.
 *         description:
 *           type: string
 *           description: The blog's description.
 *           example: Đi du lịch thì ai cũng thích, nhưng cần phải biết một số nguyên tắc để chuyến du lịch thêm phần hoàn hảo. 
 *         like:
 *           type: integer
 *           description: The blog's like.
 *           example: 10
 *         avatar:
 *           type: object
 *           properties:
 *             src:
 *               type: string
 *               description: The avatar's src.
 *               example: https://img.freepik.com/premium-photo/woman-traveler-looking-caldera-from-fira-thera-santorini-island-greece-tourism-traveling-vacation-concept_106029-1429.jpg?
 */