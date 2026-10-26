import express from "express";
import {
  GetallEmployees,
  GetEmployeeById,
  UpdateEmployeeById,
  addEmployee,
  deleteEmployeeById,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/", GetallEmployees);
router.get("/:id", GetEmployeeById);
router.post("/", addEmployee);
router.put("/:id", UpdateEmployeeById);
router.delete("/:id", deleteEmployeeById);

export default router;