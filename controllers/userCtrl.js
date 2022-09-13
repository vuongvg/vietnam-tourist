const userModel = require("../models/userModel");

const getUserInforById = async (userId) => {
   const result = await await userModel.findUserById(userId);
   return result;
}

const updateUser = async (userId,updateInfor) => {
   const result = await userModel.updateUserInfor(userId, updateInfor);
   return result;
}

module.exports = { updateUser, getUserInforById };
