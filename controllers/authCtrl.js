const User = require("../models/userModel");
const { customError } = require("../errors/customError");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userDB =  require("../db/userDb");

const encryptPassword = (password) => {
  const salt = crypto.randomBytes(128).toString("hex");

  const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");

  return {
    salt: salt,
    hashedPassword: hashedPassword,
  }
};

const verifyPassword = (password, userInfor) => {
  const hashedPassword = crypto.pbkdf2Sync(
      password, 
      userInfor.salt, 
      10000, 
      64, 
      "sha512")
  .toString("hex");

  return hashedPassword === userInfor.hashedPassword;
}

const register = async (username, email, password, phone) => {
  const existedUser = await User.findUserByName(username);

  console.log(existedUser);

  const registeredEmail = await User.findUserByEmail(email);

  if (existedUser.length) {
    return {
      status:400,
      message:"Username has been registered"
    };
  } else if (registeredEmail.length) {
    return {
      status: 400,
      message:"Email has been registered"
    };
  } else if (!password || password.length <6) {
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

const login = async (username, password) => {
  if (!username) {
    return {
      status:400,
      message:"Username is empty"
    };
  } else if (!password) {
    return {
      status:400,
      message:"Password is empty"
    };
  } else {
    const existedUser = await userDB.findUserByName({username: username, password: password});
    
    if (!existedUser) {
      return {
        status:400,
        message:"Username or Password is incorrect"
      }
    }

    if (!verifyPassword(password, existedUser)) {
      return {
        status:400,
        message:"Username or Password is incorrect"
      }
    }

    const token = jwt.sign(
        {
          userId: existedUser._id
        },
        "MY_PRIVATE_KEY",
        {
          expiresIn: 60*60*24
        }
    )

    return {
      status:200,
      data:existedUser,
      token:token
    }
  }
}

module.exports = { register };

