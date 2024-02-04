import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

//registerUser
router.route("/").post(registerUser);
// Public route
router.post("/login", authUser);
//protected route userProfile
router.route("/profile").get(protect, getUserProfile);

export default router;
