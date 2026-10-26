import express from "express";
import {
  addDoctor,
  deleteDoctorById,
  GetallDoctors,
  GetDoctorById,
  UpdateDoctorById,
} from "../controllers/doctors.js";

const DoctorRoutes = express.Router();

DoctorRoutes.get("/", GetallDoctors);
DoctorRoutes.get("/:id", GetDoctorById);
DoctorRoutes.put("/:id", UpdateDoctorById);
DoctorRoutes.delete("/:id", deleteDoctorById);
DoctorRoutes.post("/", addDoctor);

export default DoctorRoutes;