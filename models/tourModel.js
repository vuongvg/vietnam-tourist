const { default: mongoose } = require("mongoose");

const TourSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, "Title is required"],
         minlength: [6, "Title can not be less than 6 characters"],
         maxlength: [100, "Title can not be more than 50 characters"],
      },
      content: {
         type: String,
         required: [true, "Content is required"],
         minlength: [6, "Content can not be less than 6 characters"],
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
      location: {
         type: String,
         required: [true, "Location is required"],
      },
      price: {
         type: Number,
         required: [true, "Price is required"],
      },
      regularPrice: {
         type: Number,
      },
      discount: {
         type: String,
      },
      depart: {
         type: String,
      },
      transfer: {
         type: String,
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
   },
   { timestamps: true, versionKey: false, strictQuery: false }
);

const Tour = new mongoose.model("Tours", TourSchema);

module.exports = Tour;
