const { default: mongoose } = require("mongoose");

const CommentSchema = new mongoose.Schema(
   {
      idPost: {
         type: String,
         required: [true, "Id post is required"],
      },
      username: {
         type: String,
         required: [true, "Username is required"],
      },
      avatar: {
         type: String,
      },
      comment: {
         type: String,
         required: [true, "Comment is required"],
      },
   },
   { timestamps: true, versionKey: false }
);

const Comment = new mongoose.model("Comments", CommentSchema);

module.exports = Comment;
