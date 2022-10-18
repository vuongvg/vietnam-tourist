const userModel = require("../models/userModel");
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
   const existedUser = await userModel.findUserByName(username);
   const registeredEmail = await userModel.findUserByEmail(email);

   if (existedUser.length) throw customError(400, "Username has been registered");
   if (registeredEmail.length) throw customError(400, "Email has been registered");
   if (!password || password.length < 6) throw customError(400, "The min length of password is only 6");

   const { salt, hashedPassword } = encryptPassword(password);
   const result = await userModel.create({ username, email, salt, hashedPassword });
   result.salt = undefined;
   result.hash = undefined;
   return result;
};

const login = async (username, password) => {
   const existedUser = await userModel.findUserByName(username).lean();
   if (!existedUser.length) throw customError(400, "Username or Password is incorrect");
   if (!verifyPassword(password, existedUser[0])) throw customError(400, "Username or Password is incorrect");

   const token = jwt.sign(
      {
         userId: existedUser[0]._id.toString(),
      },
      process.env.MY_PRIVATE_KEY,
      {
         expiresIn: 1000 * 60 * 60 * 24,
      }
   );
   existedUser[0].salt = undefined;
   existedUser[0].hash = undefined;
   return { ... existedUser[0], token };
};

module.exports = { register, login };
