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

const updateHotel = async (hotelId, hotelInfor) => {
    const result = await hotelModel.updateHotelInfor(hotelId, hotelInfor);

    return result;
}

const deleteHotel = async (hotelId) => {
    const result = await hotelModel.deleteHotelInfor(hotelId);

    return result;
}

module.exports = { getListHotel, createNewHotel, updateHotel, deleteHotel };