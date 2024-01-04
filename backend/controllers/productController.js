import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
  const { id } = req.params; // Get the id parameter from the request URL
  const product = await Product.findById(id); // Find the product with the matching id
  if (product) {
    res.json(product); // Send the product details as a JSON response
  } else {
    res.status(404).json({ message: "Product not found" }); // If product is not found, send a 404 status code and an error message
  }
});

export { getProducts, getProductsById };
