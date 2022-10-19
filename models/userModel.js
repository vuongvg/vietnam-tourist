const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
   {
      username: {
         type: String,
         unique: true,
         required: [true, "Name must be provided"],
         trim: true,
         maxlength: [20, "Nam can not be  more than 20 characters"],
      },
      email: {
         type: String,
         unique: true,
         required: [true, "Email must be provided"],
         lowercase: true,
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
      },
      phone: {
         type: String,
      },
      salt: {
         type: String,
      },
      hash: {
         type: String,
      },
      avatar: {
         type: String,
      },
      role: {
         type: String,
         default: undefined,
      },
   },
   { collection: "users", timestamps: true, versionKey: false }
);

const UserModel = new mongoose.model("Users", userSchema);

module.exports = UserModel;
