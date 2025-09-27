import express from 'express';
import { getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/get-profile', authMiddleware, getUserProfile);
router.get('/logout', authMiddleware, logoutUser);

export default router;
