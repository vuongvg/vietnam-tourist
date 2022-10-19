const User = require("../models/userModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { customError } = require("../errors/customError");

const encryptPassword = (password) => {
   const salt = crypto.randomBytes(128).toString("hex");
   const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
   return { salt, hashedPassword };
};

const verifyPassword = (password, userInfor) => {
   const hashedPassword = crypto.pbkdf2Sync(password, userInfor.salt, 10000, 64, "sha512").toString("hex");
   return hashedPassword === userInfor.hash;
};

const register = async (username, email, password) => {
   const existedUser = await User.findOne({ username }).lean();
   const registeredEmail = await User.findOne({ email }).lean();

   if (existedUser) throw customError(400, "Username has been registered");
   if (registeredEmail) throw customError(400, "Email has been registered");
   if (!password || password.length < 6) throw customError(400, "The min length of password is only 6");

   const { salt, hashedPassword } = encryptPassword(password);
   const result = await User.create({ username, email, salt, hash:hashedPassword });
   result.salt = undefined;
   result.hash = undefined;
   return result;
};

const login = async (username, password) => {
   const existedUser = await User.findOne({ username }).lean();
   if (!existedUser) throw customError(400, "Username or Password is incorrect");
   if (!verifyPassword(password, existedUser)) throw customError(400, "Username or Password is incorrect.");

   const token = jwt.sign(
      {
         userId: existedUser._id.toString(),
      },
      process.env.MY_PRIVATE_KEY,
      {
         expiresIn: 1000 * 60 * 60 * 24,
      }
   );
   existedUser.salt = undefined;
   existedUser.hash = undefined;
   return { ...existedUser, token };
};

module.exports = { register, login };
