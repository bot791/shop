import express from "express";
import { protect } from "../middleware/authMiddleware.js"
const router = express.Router();
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";


router.get("/", getProducts);
router.post("/addProduct", protect, createProduct);
router.get("/:id", getProductsById);
router.put("/:id", updateProduct);

export default router;
