const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "Title must be provided"],
         trim: true,
         maxlength: [50, "Title can not be more than 50 characters"],
      },
      email: {
         type: String,
         required: [true, "Email must be provided"],
         // unique: true,
         lowercase: true,
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
      },
      phone: {
         type: String,
         required: [true, "Contact information must be provided"],
         maxlength: [11, "The max length of phone number is only 11"],
         minLength: [10, "The min length of phone number is only 10"],
         // unique: true,
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
         src:{
            type: String,
            required: [true, "Avatar is required"],
         }
      },
      album: {
         type: Array,
      },
      description: {
         type: String,
         required: [true, "Description must be provided"],
         minlength: [6, "Content can not be less than 6 characters"],
      },
      content: {
         type: String,
         required: [true, "Content must be provided"],
         minlength: [6, "Content can not be less than 6 characters"],
      },
      evaluate: {
         type: Number,
      },
      famous: {
         type: Boolean,
         default: false,
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
            src: { type: String },
         },
      },
      typePost:{
         type: String,
         default: "hotel",
      }
   },
   { collection: "hotels", timestamps: true, versionKey: false, strictQuery: false }
);
hotelSchema.index({ "$**": "text" }, { name: "TextIndex" });

const HotelModel = new mongoose.model("Hotels", hotelSchema); 
 
module.exports = HotelModel;
