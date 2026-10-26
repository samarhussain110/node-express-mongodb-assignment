import express from "express";
import {
  GetallCourses,
  GetCourseById,
  UpdateCourseById,
  addCourse,
  deleteCourseById,
} from "../controllers/courses.js";

const router = express.Router();

router.get("/", GetallCourses);
router.get("/:id", GetCourseById);
router.post("/", addCourse);
router.put("/:id", UpdateCourseById);
router.delete("/:id", deleteCourseById);

export default router;