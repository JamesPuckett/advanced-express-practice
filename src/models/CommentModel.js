import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  body: String,
  postID: Number
});

const CommentModel = mongoose.model("Comment", commentSchema);
export default CommentModel;
