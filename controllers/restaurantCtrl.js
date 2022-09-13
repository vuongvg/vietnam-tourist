const restaurantModel = require("../models/restaurantModel");
const BasePost = require("./BasePost");

class Restaurant extends BasePost {
  constructor(model){
    super(model)
    this._model=model
  }
  findFamousRestaurant = async (page = 1, limit = 10) => {
      return await this._model
          .find({ isfamous:true })
          .skip((page - 1) * limit)
          .limit(limit);
  };
}
const restaurant = new Restaurant(restaurantModel);

module.exports = restaurant;