import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductsById).put(updateProduct);

export default router;
