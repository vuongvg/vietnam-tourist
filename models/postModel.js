const { default: mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema(
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
      //   like: {
      //      type: Number,
      //      default: 0,
      //   },
   },
   { timestamps: true, versionKey: false }
);

const Post = new mongoose.model("Posts", PostSchema);

module.exports = Post;
