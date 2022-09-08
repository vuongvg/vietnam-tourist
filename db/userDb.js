const userModel = require("../models/userModel");
const { customError } = require("../errors/customError");

const insertUser = async (userInfor) => {

    var newUser = new userModel({
        username: userInfor.username,
        email: userInfor.email,
        phone: userInfor.phone,
        salt: userInfor.salt,
        hash: userInfor.hash,
        role: 0
    });

    await newUser.save();

    const insertResult = await userModel.find({ username:userInfor.username });

    if (insertResult) {
        return {
            status:200,
            object:insertResult
        } 
    } else {
        return {
            status: 400,
            message: "Inserting failed"
        }
    }
}

const findUserByName = async (username) => {
    var result = await userModel.findUserByName(username);

    return result;
};

const findUserById = async (userId) => {
    var result = await userModel.findUserById(userId);

    return result;
};

const updateUserById = async (userId, updateInfor) => {
    const result = await userModel.updateUserInfor(userId, updateInfor);

    return result;
}

module.exports = { insertUser, findUserByName, findUserById, updateUserById };