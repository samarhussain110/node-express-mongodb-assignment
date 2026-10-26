import mongoose, { model } from "mongoose";
const teacherschema = new mongoose.Schema({
  teachername: { type: String, required: true },
  subject: { type: String, required: true },
  salary: { type: Number, required: true },
  t_qty: { type: Number },
});
const teacherModel = model("teachers", teacherschema);
export default teacherModel;