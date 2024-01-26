import express from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Public route
router.post("/login", authUser);

router.route("/profile").get(getUserProfile);
export default router;
