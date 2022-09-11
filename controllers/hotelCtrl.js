const hotelDB = require("../db/hotelDb");

const getListHotel = async () => {
   const hotelsList = await hotelDB.getListHotel();

   return hotelsList;
}

const createNewHotel = async (hotelInfor) => {
   const newHotel = await hotelDB.createNewHotel(hotelInfor);

   return newHotel;
}

module.exports = { getListHotel, createNewHotel };