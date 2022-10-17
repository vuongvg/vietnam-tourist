const { default: mongoose } = require("mongoose");

const restaurantSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "Title is required"],
         trim: true,
         maxlength: [50, "Restaurant name can not be  more than 50 characters"],
      },

      phone: {
         type: String,
         required: [true, "Contact information must be provided"],
         maxlength: [11, "The max length of phone number is only 11"],
         minLength: [10, "The min length of phone number is only 10"],
         // unique: true,
         // match: [
         //     /(((\+|)84)|0)(3|5|7|8|9|2)+([0-9]{8|9})\b/,
         //     "Please enter valid phone number",
         // ]
      },
      email: {
         type: String,
         // unique: true,
         lowercase: true,
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
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

      description: {
         type: String,
         required: [true, "Description must be provided"],
      },
      evaluate: {
         type: Number,
      },
      isfamous: {
         type: String,
         default: "no famous", //famous
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
      avatar: {
         src:{
            type: String,
            required: [true, "Avatar is required"],
         }
      },
      album: [{ src: { type: String } }],
      typePost:{
         type: String,
         default: "restaurants",
      }
   },
   { collection: "restaurants", timestamps: true, versionKey: false, strictQuery: false }
);
restaurantSchema.index({ "$**": "text" }, { name: "TextIndex" });

const RestaurantModel = new mongoose.model("Restaurants", restaurantSchema);

module.exports = RestaurantModel;
