const jwt = require("jsonwebtoken");
const { customError } = require("../errors/customError");
const User = require("../models/userModel");

const authMdw = (req, res, next) => {
   const bearerToken = req.headers.authorization;
   if (!bearerToken) throw customError(400, "Authorization failed");

   const token = bearerToken.split(" ")[1];

   jwt.verify(token, process.env.MY_PRIVATE_KEY, async (err, decodedInfo) => {
      if (err) throw customError(400, "Session ended, login to implement this function");

      const user = await User.findOne({ _id: decodedInfo.userId });
      req.user = user;
      next();
   });
};

module.exports = { authMdw };
