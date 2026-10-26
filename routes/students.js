import express from "express";
import {
  GetallStudents,
  GetStudentById,
  UpdateStudentById,
  addStudent,
  deleteStudentById,
} from "../controllers/students.js";

const router = express.Router();

router.get("/", GetallStudents);
router.get("/:id", GetStudentById);
router.post("/", addStudent);
router.put("/:id", UpdateStudentById);
router.delete("/:id", deleteStudentById);

export default router;