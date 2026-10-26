import express from "express";
import {
  GetallVehicles,
  GetVehicleById,
  UpdateVehicleById,
  addVehicle,
  deleteVehicleById,
} from "../controllers/vehicles.js";

const router = express.Router();

router.get("/", GetallVehicles);
router.get("/:id", GetVehicleById);
router.post("/", addVehicle);
router.put("/:id", UpdateVehicleById);
router.delete("/:id", deleteVehicleById);

export default router;