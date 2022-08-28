const { default: mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         require: true,
         minlength: [6, "Title can not be less than 6 characters"],
         maxlength: [100, "Title can not be more than 50 characters"],
      },
      content: {
         type: String,
         require: true,
         minlength: [6, "Content can not be less than 6 characters"],
      },
      avatar: {
         type: String,
         require: true,
      },
      description: {
         type: String,
         require: true,
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
