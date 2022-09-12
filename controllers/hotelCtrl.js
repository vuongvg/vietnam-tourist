const hotelModel = require("../models/hotelModel");
const BasePost = require("./BasePost");

class Hotel extends BasePost {
    findFamousHotels = async (page = 1, limit = 10) => {
        return await this._model
            .find({ isfamous:true })
            .skip((page - 1) * limit)
            .limit(limit);
    };
}
const hotel = new Hotel(hotelModel);

module.exports = hotel;