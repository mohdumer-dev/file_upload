import mongoose from "mongoose";
import sendMail from "../config/email.js";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  imageUrl: [{ type: String }],
  videUrl: [{ type: String }],
  tags: { type: String },
  email: { type: String, unique: true },
});

// post / pre middleware only works in .save()
UserSchema.post("save", async (doc) => {
  try {
    const data = doc.imageUrl.map((x,index) => {
      return `<a href="${x}">${x}</a> <b> Image ${index+1} </b> <br> `;
    });
    sendMail(doc.email, data.toString());
  } catch (err) {
    console.error(err);
    res.json("Post middleware not  working ");
  }
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
