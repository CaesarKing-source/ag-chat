import express from "express";
import {
  getUserProfile,
  loginUser,
  logoutUser,
  otherUsers,
  registerUser,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/get-profile", authMiddleware, getUserProfile);
router.get("/users", authMiddleware, otherUsers);

export default router;
