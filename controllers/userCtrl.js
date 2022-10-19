const User = require("../models/userModel");

const getUserInforById = async (userId) => {
   const result = await await User.findOne({_id:userId});
   result.salt = undefined;
   result.hash = undefined;
   return result;
} 

const updateUser = async (userId,updateInfor) => {
   const result = await User.updateUserInfor(userId, updateInfor);
   return result;
}

module.exports = { updateUser, getUserInforById };
