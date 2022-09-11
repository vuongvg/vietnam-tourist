const { default: mongoose } = require("mongoose");

const LocationSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "Title is required"],
         minlength: [6, "Title can not be less than 6 characters"],
         maxlength: [100, "Title can not be more than 50 characters"],
      },
      avatar: {
         type: String,
         required: [true, "Avatar is required"],
      },
      description: {
         type: String,
         required: [true, "Description is required"],
         minlength: [6, "Description can not be less than 6 characters"],
      },
   },
   { timestamps: true, versionKey: false }
);

const Location = new mongoose.model("Locations", LocationSchema);

module.exports = Location;
