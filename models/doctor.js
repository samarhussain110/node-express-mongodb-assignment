import mongoose, { model } from "mongoose";
const doctorschema = new mongoose.Schema({
  doctorname: { type: String, required: true },
  specialization: { type: String, required: true },
  fees: { type: Number, required: true },
  d_qty: { type: Number },
});
const doctorModel = model("doctors", doctorschema);
export default doctorModel;