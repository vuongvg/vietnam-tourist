const hotelModel = require("../models/hotelModel");
const { customError } = require("../errors/customError");

const getListHotel =  async () => {
    const result = await hotelModel.getListHotel();

    return result;
}