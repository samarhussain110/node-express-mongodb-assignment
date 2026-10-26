import mongoose, { model } from "mongoose";
const employeeschema = new mongoose.Schema({
  employeename: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  e_qty: { type: Number },
});
const employeeModel = model("employees", employeeschema);
export default employeeModel;