import userModel from "../models/user.js";

const GetallUsers = async (req, res) => {
  try {
    const data = await userModel.find();
    res.status(200).json({ msg: "All users fetched", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const GetUserById = async (req, res) => {
  try {
    const data = await userModel.findById(req.params.id);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateUserById = async (req, res) => {
  try {
    const data = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ msg: "User updated", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const data = await userModel.create(req.body);
    res.status(201).json({ msg: "User created", data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { GetallUsers, GetUserById, UpdateUserById, addUser, deleteUserById };