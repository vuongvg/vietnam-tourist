const { default: mongoose } = require("mongoose");

const locationSchema = new mongoose.Schema(
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
         default: "location",
      }
   },
   { timestamps: true, versionKey: false, strictQuery: false }
);
locationSchema.index({ "$**": "text" }, { name: "TextIndex" });

const Location = new mongoose.model("Locations", locationSchema);

module.exports = Location;
