const User = require("../models/userModel");

exports.userCtrl = async () => {
   return await User.find({});
};
