const hotelModel = require("../models/hotelModel");
const BasePost = require("./BasePost");
class Hotel extends BasePost {
    constructor(model){
        super(model)
        this._model=model
    }
    findFamousHotels = async (page = 1, limit = 10) => {
        return await this._model
            .find({ famous:true })
            .skip((page - 1) * limit)
            .limit(limit);
    };
}
const hotel = new Hotel(hotelModel);

module.exports = hotel;