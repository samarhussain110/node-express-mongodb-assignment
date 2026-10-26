import courseModel from "../models/course.js";

const GetallCourses = async (req, res) => {
  try {
    const data = await courseModel.find();
    res.status(200).json({ msg: "All courses fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetCourseById = async (req, res) => {
  try {
    const data = await courseModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateCourseById = async (req, res) => {
  try {
    const data = await courseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Course updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCourse = async (req, res) => {
  try {
    const data = await courseModel.create(req.body);
    res.status(201).json({ msg: "Course created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    await courseModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Course deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallCourses, GetCourseById, UpdateCourseById, addCourse, deleteCourseById };