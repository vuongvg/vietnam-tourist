

//Auth

/**
 * @swagger
 * /auth/login:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/NewUser'
 *     responses:
 *       201:
 *         description: Login User.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/User'
 *                 - type: object
 *                   properties:
 *                     avatar:
 *                     phone:
 *                     token:
 *                       type: string
 *                       description: The User's token.
 *                       example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFlYWVmMWY5YjAzNjRkOTQ0YTliZWIiLCJpYXQiOjE2NjU5MzE5OTYsImV4cCI6MTc1MjMzMTk5Nn0.jNPTrVr6l-mB4ScAZcpfhbsmHRdRaXaSTYjSh5DCGiM'
 *     tags:
 *       - Auth
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/NewUser'
 *                 - type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       description: The User's email.
 *                       example: 'sale3@email.com'
 *     responses:
 *       201:
 *         description: Create User.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/User'
 *                 - type: object
 *                   properties:
 *                     avatar:
 *                     phone:
 *     tags:
 *       - Auth
 */
//////////////////////////////// User
/**
 * @swagger
 * /user/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 634c20c5f55c4a3f2fa28c1e
 *         description: Numeric ID of the blog to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Login User.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/User'
 *                 - type: object
 *                   properties:
 *                     avatar:
 *                     phone:
 *                     token:
 *                       type: string
 *                       description: The User's token.
 *                       example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzFlYWVmMWY5YjAzNjRkOTQ0YTliZWIiLCJpYXQiOjE2NjU5MzE5OTYsImV4cCI6MTc1MjMzMTk5Nn0.jNPTrVr6l-mB4ScAZcpfhbsmHRdRaXaSTYjSh5DCGiM'
 *     tags:
 *       - User
 */

/**
 * @swagger
 * /user/{id}:
 *   patch:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/NewUser'
 *                 - type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       description: The User's email.
 *                       example: 'sale3@email.com'
 *     responses:
 *       201:
 *         description: Create User.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/User'
 *                 - type: object
 *                   properties:
 *                     avatar:
 *                     phone:
 *     tags:
 *       - User
 */
/////////////////////////// Blog

/**
 * @swagger
 * /blog:
 *   get:
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default:
 *         description: The number of page to return
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default:
 *         description: The numbers of items to return
 *     responses:
 *       200:
 *         description: A list of blog.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *     tags:
 *       - Blog
 */

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 63310ae8c894be068fe83640
 *         description: Numeric ID of the blog to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get a blog.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *     tags:
 *       - Blog
 */

/**
 * @swagger
 * /blog/:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewBlog'
 *     responses:
 *       201:
 *         description: Create blog.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Blog'
 *     tags:
 *       - Blog
 */

/**
 * @swagger
 * /blog/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 63310ae8c894be068fe83640
 *         description: Numeric ID of the blog to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewBlog'
 *     responses:
 *       201:
 *         description: Update a blog.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 modifiedCount:
 *                   type: integer
 *                   example: 1
 *                 matchedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 63310ae8c894be068fe83640
 *     tags:
 *       - Blog
 */

/**
 * @swagger
 * /blog/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the blog to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete a blog.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: string
 *                   example: true
 *                 deletedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 63310ae8c894be068fe83640
 *     tags:
 *       - Blog
 */

/////////////////////Hotel
// {{url}}/api/hotel/?sort={"hotelname":"-1"}&range=["evaluate",4, 5]&filter={"isfamous":"famous"}&search=["hotelname","Sofi"]

/**
 * @swagger
 * /hotel:
 *   get:
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default:
 *         description: The number of page to return. *** Example 1
 *
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default:
 *         description: The numbers of items to return. *** Example 5
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *           default:
 *         description: Filter items. *** Example {"isfamous":"famous"}
 *
 *       - in: query
 *         name: range
 *         schema:
 *           type: string
 *           default:
 *         description: Range items. *** Example ["evaluate",4, 5]
 *
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default:
 *         description: Sort items. *** Example {"title":"-1"}
 *
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           default:
 *         description: Search items. *** Example ["title","ha_noi"]
 *
 *     responses:
 *       200:
 *         description: A list of hotel.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hotel'
 *     tags:
 *       - Hotel
 */

/**
 * @swagger
 * /hotel/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 634a8c8c08a59397336fd053
 *         description: Numeric ID of the hotel to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get a hotel.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hotel'
 *     tags:
 *       - Hotel
 */

/**
 * @swagger
 * /hotel/:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewHotel'
 *     responses:
 *       201:
 *         description: Create hotel.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Hotel'
 *     tags:
 *       - Hotel
 */

/**
 * @swagger
 * /hotel/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 63496ade7ac2c3f33eb84fb5
 *         description: Numeric ID of the hotel to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewHotel'
 *     responses:
 *       201:
 *         description: Update a hotel.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 modifiedCount:
 *                   type: integer
 *                   example: 1
 *                 matchedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 63496ade7ac2c3f33eb84fb5
 *     tags:
 *       - Hotel
 */

/**
 * @swagger
 * /hotel/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the hotel to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete a hotel.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: string
 *                   example: true
 *                 deletedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 63310ae8c894be068fe83640
 *     tags:
 *       - Hotel
 */

///////////////////// Tour

/**
 * @swagger
 * /tour:
 *   get:
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default:
 *         description: The number of page to return
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default:
 *         description: The numbers of items to return
 *     responses:
 *       200:
 *         description: A list of tour.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tour'
 *     tags:
 *       - Tour
 */

/**
 * @swagger
 * /tour/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 6347dab32d3bbbfefda65493
 *         description: Numeric ID of the tour to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get a tour.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tour'
 *     tags:
 *       - Tour
 */

/**
 * @swagger
 * /tour/:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewTour'
 *     responses:
 *       201:
 *         description: Create tour.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Tour'
 *     tags:
 *       - Tour
 */

/**
 * @swagger
 * /tour/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 6347dab32d3bbbfefda65493
 *         description: Numeric ID of the tour to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewTour'
 *     responses:
 *       201:
 *         description: Update a tour.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 modifiedCount:
 *                   type: integer
 *                   example: 1
 *                 matchedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 6347dab32d3bbbfefda65493
 *     tags:
 *       - Tour
 */

/**
 * @swagger
 * /tour/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the tour to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete a tour.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: string
 *                   example: true
 *                 deletedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 6347dab32d3bbbfefda65493
 *     tags:
 *       - Tour
 */

////////////////////// Location

/**
 * @swagger
 * /location:
 *   get:
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default:
 *         description: The number of page to return
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default:
 *         description: The numbers of items to return
 *     responses:
 *       200:
 *         description: A list of location.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 *     tags:
 *       - Location
 */

/**
 * @swagger
 * /location/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 6347bbfa28b43c92e9b9bcf5
 *         description: Numeric ID of the location to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get a location.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Location'
 *     tags:
 *       - Location
 */

/**
 * @swagger
 * /location/:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewLocation'
 *     responses:
 *       201:
 *         description: Create Location.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Location'
 *     tags:
 *       - Location
 */

/**
 * @swagger
 * /location/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 6347dab32d3bbbfefda65493
 *         description: Numeric ID of the Location to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewLocation'
 *     responses:
 *       201:
 *         description: Update a Location.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 modifiedCount:
 *                   type: integer
 *                   example: 1
 *                 matchedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 6347dab32d3bbbfefda65493
 *     tags:
 *       - Location
 */

/**
 * @swagger
 * /location/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the Location to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete a Location.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: string
 *                   example: true
 *                 deletedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 6347dab32d3bbbfefda65493
 *     tags:
 *       - Location
 */

/////////////////////// Restaurant

/**
 * @swagger
 * /restaurant:
 *   get:
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default:
 *         description: The number of page to return
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default:
 *         description: The numbers of items to return
 *     responses:
 *       200:
 *         description: A list of location.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 *     tags:
 *       - Restaurant
 */

/**
 * @swagger
 * /restaurant/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 631f5ce934dbea6679e3b899
 *         description: Numeric ID of the location to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get a location.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *     tags:
 *       - Restaurant
 */

/**
 * @swagger
 * /restaurant/:
 *   post:
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewRestaurant'
 *     responses:
 *       201:
 *         description: Create Restaurant.
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Restaurant'
 *     tags:
 *       - Restaurant
 */

/**
 * @swagger
 * /restaurant/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         default: 631f5ce934dbea6679e3b899
 *         description: Numeric ID of the Restaurant to retrieve
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *                 $ref: '#/components/schemas/NewRestaurant'
 *     responses:
 *       201:
 *         description: Update a Restaurant.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 modifiedCount:
 *                   type: integer
 *                   example: 1
 *                 matchedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 631f5ce934dbea6679e3b899
 *     tags:
 *       - Restaurant
 */

/**
 * @swagger
 * /restaurant/{id}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the Restaurant to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete a Restaurant.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 acknowledged:
 *                   type: string
 *                   example: true
 *                 deletedCount:
 *                   type: integer
 *                   example: 1
 *                 _id:
 *                   type: string
 *                   example: 631f5ce934dbea6679e3b899
 *     tags:
 *       - Restaurant
 */

//*****************************************************// Schema

// User Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: The User's title.
 *           example: sale03
 *         password:
 *           type: string
 *           description: The User's password.
 *           example: '123456@A'

 *     User:
 *       allOf:
 *         - $ref: '#/components/schemas/NewUser'
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The User ID.
 *               example: 634c20c5f55c4a3f2fa28c1e
 *             email:
 *               type: string   
 *               description: The User's email.
 *               example: 'sale3@email.com'
 *             role:
 *               type: string   
 *               description: The User's role.
 *               example: 'admin'
 *             phone:
 *               type: string
 *               description: The User's phone.
 *               example: '0968584588'
 *             password:
 *             avatar:
 *               type: object
 *               properties: 
 *                 src:
 *                   type: string
 *                   description: The avatar's src.
 *                   example: https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg
 */

// Blog Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     NewBlog:
 *       type: object
 *       properties:
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
 *     Blog:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The user ID.
 *               example: 63310ae8c894be068fe83640
 *         - $ref: '#/components/schemas/NewBlog'
 */

// Hotel Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     NewHotel:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The hotel's title.
 *           example: Intercontinental Hanoi Westlake, An IHG Hotel
 *         content:
 *           type: string
 *           description: The hotel's content.
 *           example: Thế hệ trẻ ngày nay là một thế hệ bước ra thế giới, một thế hệ phải dịch chuyển nhiều hơn và đi nhiều hơn.
 *         description:
 *           type: string
 *           description: The hotel's description.
 *           example: InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The hotel is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.
 *         email:
 *           type: string
 *           description: The hotel's email.
 *           example: 'sale@email.com'
 *         phone:
 *           type: string
 *           description: The hotel's phone.
 *           example: '0968588888'
 *         city:
 *           type: string
 *           description: The hotel's city.
 *           example: Ha Noi
 *         fullLocation:
 *           type: string
 *           description: The hotel's fullLocation.
 *           example: 5 Tu Hoa, Ha Noi
 *         avatar:
 *           type: object
 *           properties:
 *             src:
 *               type: string
 *               description: The avatar's src.
 *               example: https://www.momondo.com/rimg/himg/27/ed/51/leonardo-1140852-HANHB_4068417527_O-545141.jpg?width=510&height=510&crop=true
 *     Hotel:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The hotel ID.
 *               example: 634a8c8c08a59397336fd053
 *         - $ref: '#/components/schemas/NewHotel'
 */

// Tour Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     NewTour:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The tour's title.
 *           example: Ninh Binh Full-Day Tour from Hanoi to Hoa Lu, Tam Coc & Mua Cave Via Boat & Bike
 *         content:
 *           type: string
 *           description: The tour's content.
 *           example: English Speaking Guide, Entrance, Boat trip & Bikes, A delicious local lunch, Bus transfers from Hanoi & returns
 *         description:
 *           type: string
 *           description: The tour's description.
 *           example: Escape the bustling confines of Hanoi city, and breath the fresh air on this full-day rural Vietnam tour. With a local lunch of goat meat, fried rice and local fruits onboard, you’ll be fueled for an afternoon of action, taking in the scenery by both bamboo boat and mountain bike. See local villagers going about their daily lives as you come to appreciate a quieter slice of Vietnamese culture.
 *         regularPrice:
 *           type: integer
 *           description: The tour's regularPrice.
 *           example: 55
 *         price:
 *           type: integer
 *           description: The tour's price.
 *           example: 55
 *         discount:
 *           type: integer
 *           description: The tour's discount.
 *           example:
 *         depart:
 *           type: integer
 *           description: The tour's depart.
 *           example:
 *         province:
 *           type: string
 *           description: The tour's province.
 *           example: Ninh Bình
 *         transfer:
 *           type: string
 *           description: The tour's transfer.
 *           example: Camper van
 *         location:
 *           type: string
 *           description: The tour's location.
 *           example: Hoa Lư,Ninh Bình, Việt Nam
 *         avatar:
 *           type: object
 *           properties:
 *             src:
 *               type: string
 *               description: The avatar's src.
 *               example: https://www.planetware.com/photos-large/VIE/vietnam-hoi-an-riverfront.jpg
 *     Tour:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The tour ID.
 *               example: 6347dab32d3bbbfefda65493
 *         - $ref: '#/components/schemas/NewTour'
 */

// Location Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     NewLocation:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The location's title.
 *           example: Halong Bay
 *         description:
 *           type: string
 *           description: The location's description.
 *           example: The karst seascape of Halong Bay is one of the best places to visit in the world for spellbinding sea views and is a UNESCO World Heritage Site.
 *         avatar:
 *           type: object
 *           properties:
 *             src:
 *               type: string
 *               description: The avatar's src.
 *               example: https://www.planetware.com/photos-large/VIE/vietnam-halong-bay.jpg
 *     Location:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The location ID.
 *               example: 6347bbfa28b43c92e9b9bcf5
 *         - $ref: '#/components/schemas/NewLocation'
 */

// Restaurant Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     NewRestaurant:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The restaurant's title.
 *           example: Buffet Sen Hồ Tây
 *         description:
 *           type: string
 *           description: The restaurant's description.
 *           example: Escape the bustling confines of Hanoi city, and breath the fresh air on this full-day rural Vietnam tour. With a local lunch of goat meat, fried rice and local fruits onboard, you’ll be fueled for an afternoon of action, taking in the scenery by both bamboo boat and mountain bike. See local villagers going about their daily lives as you come to appreciate a quieter slice of Vietnamese culture.
 *         email:
 *           type: string
 *           description: The restaurant's email.
 *           example: 'sale3@email.com'
 *         phone:
 *           type: string
 *           description: The restaurant's phone.
 *           example: '0968584588'
 *         city:
 *           type: string
 *           description: The restaurant's city.
 *           example: Ha Noi
 *         fullLocation:
 *           type: string
 *           description: The restaurant's fullLocation.
 *           example: 614 Lạc Long Quân, Tây Hồ, Hà Nội
 *         gmaplink:
 *           type: string
 *           description: The restaurant's fullLocation.
 *           example: https://goo.gl/maps/QAtrWC6JUGhpbPRe9
 *         avatar:
 *           type: object
 *           properties:
 *             src:
 *               type: string
 *               description: The avatar's src.
 *               example: https://media.foody.vn/res/g1/155/prof/s640x400/foody-mobile-sen2-jpg-361-635744536611054640.jpg
 *     Restaurant:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: string
 *               description: The restaurant ID.
 *               example: 631f5ce934dbea6679e3b899
 *         - $ref: '#/components/schemas/NewRestaurant'
 */
