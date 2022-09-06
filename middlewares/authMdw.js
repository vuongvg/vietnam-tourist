const jwt = require("jsonwebtoken");
const { findById } = require("../database/user");

const authMdw = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return {
        status:400,
        message:"Authorization failed"
    }
  }
  const token = bearerToken.split(" ")[1];
  jwt.verify(token, process.env.MY_PRIVATE_KEY, async (err, decodedInfo) => {
    if (err) {
        return {
            status:400,
            message:"Session ended, login to implement this function"
        }
    } else {
        const user = await findById(decodedInfo.userId);
        req.user = user;
        next();
    }
  });
};

module.exports = { authMdw };