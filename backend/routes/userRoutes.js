import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  resisterUser,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

//reesisterUser
router.route("/").post(resisterUser);
// Public route
router.post("/login", authUser);
//protected route userProfile
router.route("/profile").get(protect, getUserProfile);

router.route("/profile").get(getUserProfile);

export default router;
