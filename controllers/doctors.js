import doctorModel from "../models/doctor.js";

const GetallDoctors = async (req, res) => {
  try {
    const data = await doctorModel.find();
    res.status(200).json({ msg: "All doctors fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetDoctorById = async (req, res) => {
  try {
    const data = await doctorModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateDoctorById = async (req, res) => {
  try {
    const data = await doctorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Doctor updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addDoctor = async (req, res) => {
  try {
    const data = await doctorModel.create(req.body);
    res.status(201).json({ msg: "Doctor created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDoctorById = async (req, res) => {
  try {
    await doctorModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Doctor deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallDoctors, GetDoctorById, UpdateDoctorById, addDoctor, deleteDoctorById };