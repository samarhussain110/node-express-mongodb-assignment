import employeeModel from "../models/employee.js";

const GetallEmployees = async (req, res) => {
  try {
    const data = await employeeModel.find();
    res.status(200).json({ msg: "All employees fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetEmployeeById = async (req, res) => {
  try {
    const data = await employeeModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateEmployeeById = async (req, res) => {
  try {
    const data = await employeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Employee updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addEmployee = async (req, res) => {
  try {
    const data = await employeeModel.create(req.body);
    res.status(201).json({ msg: "Employee created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    await employeeModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallEmployees, GetEmployeeById, UpdateEmployeeById, addEmployee, deleteEmployeeById };