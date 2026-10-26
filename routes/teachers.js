import express from "express";
import {
  GetallTeachers,
  GetTeacherById,
  UpdateTeacherById,
  addTeacher,
  deleteTeacherById,
} from "../controllers/teachers.js";

const router = express.Router();

router.get("/", GetallTeachers);
router.get("/:id", GetTeacherById);
router.post("/", addTeacher);
router.put("/:id", UpdateTeacherById);
router.delete("/:id", deleteTeacherById);

export default router;