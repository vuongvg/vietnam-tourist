const { default: mongoose } = require("mongoose");
const BlogModel = require("../models/blogModel");
const HotelModel = require("../models/hotelModel");
const LocationModel = require("../models/locationModel");
const RestaurantModel = require("../models/restaurantModel");
const TourModel = require("../models/tourModel");

const searchAllPostByKeyword = async (keyword, page, limit, sort) => {
   const listModel = [HotelModel, BlogModel, TourModel, RestaurantModel, LocationModel];
   const [...result] = await Promise.all(listModel.map((model) => model.find({ $text: { $search: keyword.replace("_", " ") } }).lean()));
   return {
      data: result.flat().filter(({ _id }) => _id).slice((page-1)*limit,page*limit),
      total: result.flat().length
   };
};

module.exports = { searchAllPostByKeyword };
