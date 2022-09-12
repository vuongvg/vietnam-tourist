const hotelModel = require("../models/hotelModel");
const BasePost = require("./BasePost");

class Restaurant extends BasePost {}
const restaurant = new Restaurant(hotelModel);

module.exports = restaurant;
// const hotelDB = require("../db/hotelDb");

// const getListHotel = async () => {
//    const hotelsList = await hotelDB.getListHotel();

//    return hotelsList;
// }

// const createNewHotel = async (hotelInfor) => {
//    const newHotel = await hotelDB.createNewHotel(hotelInfor);

//    return newHotel;
// }

// const updateHotelInfor = async (hotelId, updateInfor) => {
//    const updatedHotel = await hotelDB.updateHotel(hotelId, updateInfor);

//    return updatedHotel; 
// }

// const deleteHotelInfor = async (hotelId) => {
//    const deletedHotel = await hotelDB.deleteHotel(hotelId);

//    return deletedHotel;
// }

// module.exports = { getListHotel, createNewHotel, updateHotelInfor, deleteHotelInfor };