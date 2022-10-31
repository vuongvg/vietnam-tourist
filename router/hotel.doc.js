const HotelModel = require("../models/hotelModel");

const hotel = {
   _id: "634a8c8c08a59397336fd053",
   title: "Intercontinental Hanoi Westlake, An IHG Hotel",
   email: "sale@email.com",
   phone: "0968588188",
   city: "Ha Noi",
   fullLocation: "5 Tu Hoa, Ha Noi",
   avatar: {
      src: "https://www.momondo.com/rimg/himg/27/ed/51/leonardo-1140852-HANHB_4068417527_O-545141.jpg?width=510&height=510&crop=true",
   },
   album: [],
   description:
      "InterContinental Hanoi Westlake is an iconic hotel in the heart of the vibrant district of Tay Ho, offering travelers luxurious guest rooms and bespoke Club InterContinental service. Experience multi-award-winning dining at Saigon restaurant or capture a magnificent sunset at Hanoi's only overwater bar, Sunset Bar. The hotel is minutes away from the city’s most alluring attractions, while at the same time offering a peaceful escape in a beautiful and iconic lakeside setting.",
   famous: true,
   createBy: {
      _id: "631eaef1f9b0364d944a9beb",
      username: "vuongcdt",
   },
   typePost: "hotel",
   createdAt: "2022-10-15T10:33:48.711Z",
   updatedAt: "2022-10-27T15:15:10.561Z",
   evaluate: 4.5,
};

const listHotel = {
   tags: ["Hotel"],
   description: "List all of the hotels",
   //    parameters: [
   //       { in: "query", name: "page", schema: { type: "integer", default: "" }, description: `The number of page to return.  Example: 1` },
   //       { in: "query", name: "limit", schema: { type: "integer", default: "" }, description: `The numbers of items to return.  Example: 5` },
   //       { in: "query", name: "filter", schema: { type: "string", default: "" }, description: `Filter items.  Example: {"famous":true}` },
   //       { in: "query", name: "range", schema: { type: "string", default: "" }, description: `Range items.  Example: ["evaluate",4, 5]` },
   //       { in: "query", name: "sort", schema: { type: "string", default: "" }, description: `Sort items.  Example: {"title":"-1"}` },
   //       { in: "query", name: "search", schema: { type: "string", default: "" }, description: `Search items.  Example: ["title","ha_noi"]` },
   //    ],
   responses: {
      200: {
         description: "OK",
         content: {
            "application/json": {
               schema: {
                  type: "array",
                  example: [hotel],
               },
            },
         },
      },
   },
};

exports.hotelRouteDoc = {
   "/hotel": {
      get: listHotel,
   },
};

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
 *         description: Filter items. *** Example {"famous":true}
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
