import mongoose, { model } from "mongoose";
const productschema = new mongoose.Schema({
  productname: { type: String, required: true },
  productdescription: { type: String, required: true },
  price: { type: Number, required: true },
  p_qty: { type: Number },
});
const productModel = model("products", productschema);
export default productModel;