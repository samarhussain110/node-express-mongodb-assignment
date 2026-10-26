import studentModel from "../models/student.js";

const GetallStudents = async (req, res) => {
  try {
    const data = await studentModel.find();
    res.status(200).json({ msg: "All students fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetStudentById = async (req, res) => {
  try {
    const data = await studentModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateStudentById = async (req, res) => {
  try {
    const data = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Student updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addStudent = async (req, res) => {
  try {
    const data = await studentModel.create(req.body);
    res.status(201).json({ msg: "Student created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    await studentModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallStudents, GetStudentById, UpdateStudentById, addStudent, deleteStudentById };