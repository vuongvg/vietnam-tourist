const { default: mongoose } = require("mongoose");
const BlogModel = require("../models/blogModel");
const HotelModel = require("../models/hotelModel");
const LocationModel = require("../models/locationModel");
const RestaurantModel = require("../models/restaurantModel");
const TourModel = require("../models/tourModel");

const searchAllPostByKeyword = async (keyword) => {
   const listModel = [HotelModel, BlogModel, TourModel, RestaurantModel, LocationModel];
   const [...result] = await Promise.all(listModel.map((model) => model.find({ $text: { $search: keyword.replace("_", " ") } }).lean()));
   return result.flat();
};

module.exports = { searchAllPostByKeyword };
