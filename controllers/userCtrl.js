const userDB = require("../db/userDb");

const getUserInforById = async (userID) => {
   const userInfor = await userDB.findUserById(userID);

   return userInfor;
}

const updateUser = async (userId,updateInfor) => {
   const updatedUser = await userDB.updateUserById(userId,updateInfor);

   return updatedUser;
}

module.exports = { updateUser, getUserInforById};
