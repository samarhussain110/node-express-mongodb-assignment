import express from "express";
import {
  GetallUsers,
  GetUserById,
  UpdateUserById,
  addUser,
  deleteUserById,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", GetallUsers);
router.get("/:id", GetUserById);
router.post("/", addUser);
router.put("/:id", UpdateUserById);
router.delete("/:id", deleteUserById);

export default router;