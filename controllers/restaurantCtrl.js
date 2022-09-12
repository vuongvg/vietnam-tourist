const restaurantModel = require("../models/restaurantModel");
const BasePost = require("./BasePost");

class Restaurant extends BasePost {}
const restaurant = new Restaurant(restaurantModel);

module.exports = restaurant;