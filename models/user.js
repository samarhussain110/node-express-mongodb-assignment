import mongoose, { model } from "mongoose";
const userschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  u_qty: { type: Number },
});
const userModel = model("users", userschema);
export default userModel;