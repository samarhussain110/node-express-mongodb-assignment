import mongoose, { model } from "mongoose";
const vehicleschema = new mongoose.Schema({
  vehiclename: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  v_qty: { type: Number },
});
const vehicleModel = model("vehicles", vehicleschema);
export default vehicleModel;