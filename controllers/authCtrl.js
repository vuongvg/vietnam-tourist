const userModel = require("../models/userModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const encryptPassword = (password) => {
   const salt = crypto.randomBytes(128).toString("hex");
   const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

   return {
      salt: salt,
      hashedPassword: hashedPassword,
   };
};

const verifyPassword = (password, userInfor) => {
   const hashedPassword = crypto.pbkdf2Sync(password, userInfor.salt, 10000, 64, "sha512").toString("hex");

   return hashedPassword === userInfor.hash;
};

const register = async (username, email, password, phone) => {
   const existedUser = await userModel.findUserByName(username);
   const registeredEmail = await userModel.findUserByEmail(email);
   if (existedUser.length) {
      return {
         status: 400,
         message: "Username has been registered",
      };
   } else if (registeredEmail.length) {
      return {
         status: 400,
         message: "Email has been registered",
      };
   } else if (!password || password.length < 6) {
      return {
         status: 400,
         message: "Email has been registered",
      };
   } else {
      const { salt, hashedPassword } = encryptPassword(password);

      var userInfor = {
         username: username,
         email: email,
         phone: phone,
         salt: salt,
         hash: hashedPassword,
      }; 

      const result =await userModel.create(userInfor);
      result.salt = undefined;
      result.hash = undefined;
      return result
   }
};

const login = async (username, password) => {
   const existedUser = await userModel.findUserByName(username);

   if (!existedUser.length) {
      return {
         status: 400,
         message: "Username or Password is incorrect",
      };
   }

   if (!verifyPassword(password, existedUser[0])) {
      return {
         status: 400,
         message: "Username or Password is incorrect",
      };
   }

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
   return {
      status: 200,
      data: existedUser,
      token: token,
   }; 
};

module.exports = { register, login };
