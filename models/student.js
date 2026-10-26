import mongoose, { model } from "mongoose";
const studentschema = new mongoose.Schema({
  studentname: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  s_qty: { type: Number },
});
const studentModel = model("students", studentschema);
export default studentModel;