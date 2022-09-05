const User = require("../models/userModel");
const { customError } = require("../errors/customError");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userDB =  require("../db/user");

const encryptPassword = (password) => {
  const salt = crypto.randomBytes(128).toString("hex");

  const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

  return {
    salt: salt,
    hashedPassword: hashedPassword,
  }
};

const verifyPassword = (password, user) => {
  const hashedPassword = crypto.pbkdf2Sync(
      password, 
      user.salt, 
      10000, 
      64, 
      "sha512")
  .toString("hex");

  return hashedPassword === user.hashedPassword;
}

const register = async (username, email, password, phone) => {
  const existedUser = await User.findOne({ username:username });

  const registeredEmail = await User.findOne({ email:email });

  if (existedUser) {
    return {
      status:400,
      message:"Username has been registered"
    };
  } else if (registeredEmail) {
    return {
      status: 400,
      message:"Email has been registered"
    };
  } else {
    const { salt, hashedPassword } = encryptPassword(password);

    const insertedUser = await userDB.insertUser({
        username: username,
        email: email,
        phone: phone,
        salt: salt,
        hash: hashedPassword,
    });

    return insertedUser;
  }
}

module.exports = { register };

