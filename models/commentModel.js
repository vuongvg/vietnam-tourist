const { default: mongoose } = require("mongoose");

const CommentSchema = new mongoose.Schema(
   {
      idPost: {
         type: String,
         required: [true, "Id post is required"],
      },

      comment: {
         type: String,
         required: [true, "Comment is required"],
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

const Comment = new mongoose.model("Comments", CommentSchema);

module.exports = Comment;
