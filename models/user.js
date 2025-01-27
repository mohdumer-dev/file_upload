import mongoose from "mongoose";
import sendMail from "../config/email.js";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  imageUrl: [{ type: String }],
  videUrl: [{ type: String }],
  tags: { type: String },
});

UserSchema.post("save", (e) => {
  console.log("heloo")
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
