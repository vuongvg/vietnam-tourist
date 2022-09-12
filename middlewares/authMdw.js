const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const authMdw = (req, res, next) => {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        res.send({
            status:400,
            message:"Authorization failed"
        });
    }

    const token = bearerToken.split(" ")[1];

    jwt.verify(token, process.env.MY_PRIVATE_KEY, async (err, decodedInfo) => {
        if (err) {
            res.send({
                status:400,
                message:"Session ended, login to implement this function"
            });
        } else {
            const user = await userModel.findUserById(decodedInfo.userId);
            req.user = user[0];
            next();
        }
    });
};

module.exports = { authMdw };