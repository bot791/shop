import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params; // Get the id parameter from the request URL
    const product = await Product.findById((p) => p._id === id); // Find the product with the matching id
    if (product) {
      res.json(product); // Send the product details as a JSON response
    } else {
      res.status(404).json({ message: "Product not found" }); // If product is not found, send a 404 status code and an error message
    }
  })
);
export default router;
