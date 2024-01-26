import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Public route
router.post("/login", authUser);
//protected route
router.route("/profile").get(protect, getUserProfile);

export default router;
