import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import products from "./data/products.js";
import cors from "cors";
dotenv.config();

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

//setting up route
app.get("/", (req, res) => {
  res.send("api started...");
});

app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);


//setting up route

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
