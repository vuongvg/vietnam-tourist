const User = require("../models/userModel");
const { customError } = require("../errors/customError");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

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
  const existedUser = await User.findOne({ username });

  if (existedUser) {
    return customError(400, "Tài khoản này đã được sử dụng!");
  } else {
    const { salt, hashedPassword } = encryptPassword(password);

    // const insertedUser = await insertUser({
    //     username: username,
    //     email: email,
    //     salt: salt,
    //     hashedPassword: hashedPassword,
    // });
  }
}

module.exports = { register };

