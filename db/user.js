const userModel = require("../models/userModel");
const { customError } = require("../errors/customError");

const userRegistation = async (req) => {

}

const userFindById = async (req) => {

}

const insertUser = async (userInfor) => {

    var newUser = new userModel({
        username: userInfor.username,
        email: userInfor.email,
        hash: userInfor.hash,
        phone: userInfor.phone,
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

module.exports = { insertUser };