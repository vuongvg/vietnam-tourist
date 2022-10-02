const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema(
   {
      hotelname: {
         type: String,
         required: [true, "Name must be provided"],
         trim: true,
         maxlength: [50, "Name can not be more than 50 characters"],
      },
      email: {
         type: String,
         unique: true,
         lowercase: true,
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
      },
      phone: {
         type: String,
         required: [true, "Contact information must be provided"],
         maxlength: [11, "The max length of phone number is only 11"],
         minLength: [10, "The min length of phone number is only 10"],
         unique: true,
      },
      city: {
         type: String,
         required: [true, "City must be provided"],
      },
      fullLocation: {
         type: String,
         required: [true, "Location must be provided"],
      },
      gmaplink: {
         type: String,
      },
      avatar: {
         type: String,
      },
      album: {
         type: Array,
      },
      description: {
         type: String,
         required: [true, "Description must be provided"],
      },
      evaluate: {
         type: Number,
      },
      isfamous: {
         type: String,
         default: "not famous", //famous
      },
      createBy: {
         _id: {
            type: String,
            required: [true, "Create by id is required"],
         },
         username: {
            type: String,
            required: [true, "Create by username is required"],
         },
         avatar: {
            type: String,
         },
      },
   },
   { collection: "hotels", timestamps: true, versionKey: false }
);

const HotelModel =new mongoose.model("Hotels", hotelSchema);

module.exports = HotelModel;
