import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  imageUrl:[{type:String}],
  videUrl:[{type:String}],
  tags:{type:String}
});

const UserModel=mongoose.model('User',UserSchema)
export default UserModel