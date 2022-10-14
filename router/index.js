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
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      _id:
 *                          type: integer
 *                          description: The blog ID.
 *                          example: 63310ae8c894be068fe83640
 *                      title:
 *                          type: string
 *                          description: The blog title.
 *                          example: 10 típ cho người yêu du lịch và đam mê khám phá những vùng đất ban sơ
 *                      content: 
 *                          type: string
 *                          description: The blog content.
 *                          example: Thế hệ trẻ ngày nay là một thế hệ bước ra thế giới, một thế hệ phải dịch chuyển nhiều hơn và đi nhiều hơn. Đi để thấy yêu bản thân và cuộc đời mình hơn. Đi để thấy cuộc sống con người xung quanh mình đẹp như thế nào và để thấy mình bé nhỏ ra sao trước vùng trời bao la, đại dương mênh mông và cuộc đời đầy gió bão.Nhưng đi như thế nào để chuyến đi thật ý nghĩa, trọn vẹn thì bạn nên thủ sẵn cho mình một vài bí quyết nhỏ sau.
 *                      avatar: 
 *                          type: object
 *                          properties:
 *                           src:
 *                              type: string
 *                              description: The src image.
 *                              example: https://img.freepik.com/premium-photo/woman-traveler-looking-caldera-from-fira-thera-santorini-island-greece-tourism-traveling-vacation-concept_106029-1429.jpg?
 *                      description:
 *                          type: string
 *                          description: The blog description.
 *                          example: Đi du lịch thì ai cũng thích, nhưng cần phải biết một số nguyên tắc để chuyến du lịch thêm phần hoàn hảo. Dắt túi một vài tips sau đây để có được một chuyến đi thật trọn vẹn nhé, bạn trẻ!
*/