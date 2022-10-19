const RestaurantModel = require("../models/restaurantModel");

const searchAllPostByKeyword = async (keyword, page, limit, sort) => {
   const result = await RestaurantModel.aggregate([
      [
         ...["hotels", "blogs", "tours", "location"].map((field) => ({ $unionWith: { coll: field } })),
         {
            $match: {
               $or: ["city", "title", "fullLocation", "description", "province", "location", "content"].map((field) => ({
                  [field]: new RegExp(keyword.replace("_", " "), "i"),
               })),
            },
         },
         {
            $set: {
               temp: 1,
            },
         },
         {
            $facet: {
               count: [
                  {
                     $sortByCount: "$temp",
                  },
               ],
               data: [{ $sort: sort }, { $skip: +limit * (+page - 1) }, { $limit: +limit }],
            },
         },
      ],
   ]);
   return {
      data: result[0].data,
      total: result[0].count[0].count,
   };
};

module.exports = { searchAllPostByKeyword };
