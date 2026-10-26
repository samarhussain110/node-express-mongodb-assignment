import mongoose, { model } from "mongoose";
const bookschema = new mongoose.Schema({
  bookname: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  b_qty: { type: Number },
});
const bookModel = model("books", bookschema);
export default bookModel;