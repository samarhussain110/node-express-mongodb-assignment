import express from "express";
import {
  GetallBooks,
  GetBookById,
  UpdateBookById,
  addBook,
  deleteBookById,
} from "../controllers/books.js";

const router = express.Router();

router.get("/", GetallBooks);
router.get("/:id", GetBookById);
router.post("/", addBook);
router.put("/:id", UpdateBookById);
router.delete("/:id", deleteBookById);

export default router;