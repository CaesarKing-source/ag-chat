import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.post('/send-message/:receiverID', authMiddleware, sendMessage);
router.get('/get-messages/:receiverID', authMiddleware, getMessages);

export default router;