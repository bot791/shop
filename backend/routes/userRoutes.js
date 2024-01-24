import express from "express";
const router = express.Router();
import { authUser, getProtectedData } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Public route
router.post("/login", authUser);

// Protected route
router.get("/protected", protect, getProtectedData);

export default router
