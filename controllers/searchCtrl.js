const { default: mongoose } = require("mongoose");
const BlogModel = require("../models/blogModel");
const HotelModel = require("../models/hotelModel");
const LocationModel = require("../models/locationModel");
const RestaurantModel = require("../models/restaurantModel");
const TourModel = require("../models/tourModel");

const searchAllPostByKeyword = async (keyword, page, limit, sort) => {
   const listModel = [HotelModel, BlogModel, TourModel, RestaurantModel, LocationModel];
   const [...result] = await Promise.all(listModel.map((model) => model.find({ $text: { $search: keyword.replace("_", " ") } }).lean()));
   const temp = await LocationModel.aggregate([
      {
         $unionWith: {
            coll: "restaurants",
            pipeline: [
               {
                  $search: {
                     text: {
                        query: keyword.replace("_", " "),
                        path: "title",
                     },
                  },
               },
            ],
         },
      },
      {
         $unionWith: {
            coll: "hotels",
            pipeline: [
               {
                  $search: {
                     text: {
                        query: keyword.replace("_", " "),
                        path: "title",
                     },
                  },
               },
            ],
         },
      },
      {
         $unionWith: {
            coll: "blogs",
            pipeline: [
               {
                  $search: {
                     text: {
                        query: keyword.replace("_", " "),
                        path: "title",
                     },
                  },
               },
            ],
         },
      },
      {
         $unionWith: {
            coll: "tours",
            pipeline: [
               {
                  $search: {
                     text: {
                        query: keyword.replace("_", " "),
                        path: "title",
                     },
                  },
               },
            ],
         },
      },
      // {
      //    $count: "avatar",
      // },
   ]);
   console.log(`  ~ temp`, temp);
   console.log(`  ~ result.flat().length`, result.flat().length);
   return {
      data: result
         .flat()
         .filter(({ _id }) => _id)
         .slice((page - 1) * limit, page * limit),
      total: result.flat().length,
   };
};

module.exports = { searchAllPostByKeyword };
