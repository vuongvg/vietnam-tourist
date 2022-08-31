const userModel = require("../models/userModel");
const { customError } = require("../errors/customError");

const userRegistation = async (req) => {

}

const userFindById = async (req) => {

}

const insertUser = async (req, res) => {
    var userDetails = new userModel({
        username: req.body.username,
        email: req.body.email,
        hash: req.body.hash
    });

    userDetails.save((err, doc) => {
        if (!err) {
            return result;
        } else {
            return customError(400, "Đăng ký tài khoản không thành công");
        }
    });
}

module.exports = { insertUser };