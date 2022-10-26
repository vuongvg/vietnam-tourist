const { customError } = require("../errors/customError");
const User = require("../models/userModel");

const getUserInforById = async (userId) => {
   const result = await await User.findOne({ _id: userId });
   result.salt = undefined;
   result.hash = undefined;
   return result;
};

const updateUser = async (userId, updateInfor) => {
   const result = await User.findOneAndUpdate({ _id: userId }, updateInfor);
   return result;
};

const getListUser = async (page, limit) => {
   return await Promise.all([
      User.find()
         .skip((page - 1) * limit)
         .limit(limit),
      User.count(),
   ]);
};

const deleteUser = async (user) => {
   if( user.username.slice(0,4)!=='test') throw customError(405,"Method Not Allowed");
   const result = await User.findOneAndDelete({ _id:user._id }).lean();
   return result;
};

module.exports = { updateUser, getUserInforById, getListUser, deleteUser };
