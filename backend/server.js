const express = require("express");
const app = express();
const products = require("./data/products");
const dotenv = require('dotenv')

dotenv.config()

app.get("/", (req, res) => {
  res.send("api started...");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params; // Get the id parameter from the request URL
  const product = products.find((p) => p._id === id); // Find the product with the matching id
  if (product) {
    res.json(product); // Send the product details as a JSON response
  } else {
    res.status(404).json({ message: "Product not found" }); // If product is not found, send a 404 status code and an error message
  }
});

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`));
