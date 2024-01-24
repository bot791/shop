import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchpassword(password))) {
    res.json({
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const getProtectedData = asyncHandler(async (req, res) => {
  // You can access the authenticated user from req.user
  res.json({
    email: req.user.email,
    // Add other user-related data as needed
  });
});

export { authUser, getProtectedData };
