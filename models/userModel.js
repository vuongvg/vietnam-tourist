const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
   email: { type: String, require: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
