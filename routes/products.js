import express from "express";
import {
  Getallproducts,
  GetproductById,
  UpdateProductById,
  addproduct,
  deletebyid,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", Getallproducts);
router.get("/:id", GetproductById);
router.post("/", addproduct);
router.put("/:id", UpdateProductById);
router.delete("/:id", deletebyid);

export default router;