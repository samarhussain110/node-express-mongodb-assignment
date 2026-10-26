import vehicleModel from "../models/vehicle.js";

const GetallVehicles = async (req, res) => {
  try {
    const data = await vehicleModel.find();
    res.status(200).json({ msg: "All vehicles fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetVehicleById = async (req, res) => {
  try {
    const data = await vehicleModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateVehicleById = async (req, res) => {
  try {
    const data = await vehicleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "Vehicle updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addVehicle = async (req, res) => {
  try {
    const data = await vehicleModel.create(req.body);
    res.status(201).json({ msg: "Vehicle created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteVehicleById = async (req, res) => {
  try {
    await vehicleModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Vehicle deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallVehicles, GetVehicleById, UpdateVehicleById, addVehicle, deleteVehicleById };