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

const createProduct = asyncHandler(async (req, res) => {
  const {
    user,
    name,
    image,
    brand,
    category,
    description,
    rating,
    numReviews,
    price,
    countInStock,
    location,
  } = req.body;

  const product = new Product({
    user,
    name,
    image,
    brand,
    category,
    description,
    rating,
    numReviews,
    price,
    countInStock,
    location,
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    image,
    brand,
    category,
    description,
    rating,
    numReviews,
    price,
    countInStock,
    location,
  } = req.body;

  const product = await Product.findById(id);

  if (product) {
    // Update each field only if it's provided in the request body
    product.name = name || product.name;
    product.image = image || product.image;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.description = description || product.description;
    product.rating = rating || product.rating;
    product.numReviews = numReviews || product.numReviews;
    product.price = price || product.price;
    product.countInStock = countInStock || product.countInStock;
    product.location = location || product.location;

    // Save the updated product
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductsById, createProduct, updateProduct };
