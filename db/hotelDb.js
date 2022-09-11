const hotelModel = require("../models/hotelModel");
const { customError } = require("../errors/customError");

const getListHotel =  async () => {
    const result = await hotelModel.getAllHotels();

    return result;
}

const createNewHotel = async (hotelInfor) => {
    const result = await hotelModel.create(hotelInfor);

    return result;
}

module.exports = { getListHotel, createNewHotel };