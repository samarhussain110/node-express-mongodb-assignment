import mongoose, { model } from "mongoose";
const courseschema = new mongoose.Schema({
  coursename: { type: String, required: true },
  duration: { type: String, required: true },
  fee: { type: Number, required: true },
  c_qty: { type: Number },
});
const courseModel = model("courses", courseschema);
export default courseModel;