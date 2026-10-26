import teacherModel from "../models/teacher.js";

const GetallTeachers = async (req, res) => {
  try {
    const data = await teacherModel.find();
    res.status(200).json({ msg: "All teachers fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetTeacherById = async (req, res) => {
  try {
    const data = await teacherModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateTeacherById = async (req, res) => {
  try {
    const data = await teacherModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Teacher updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addTeacher = async (req, res) => {
  try {
    const data = await teacherModel.create(req.body);
    res.status(201).json({ msg: "Teacher created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTeacherById = async (req, res) => {
  try {
    await teacherModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Teacher deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallTeachers, GetTeacherById, UpdateTeacherById, addTeacher, deleteTeacherById };