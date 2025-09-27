import { asyncHandler } from "../utilities/asyncHandler.js";
import { tokenVerify } from "../service/token.service.js";

export const authMiddleware = asyncHandler( async (req, res, next) => {
    const token = req.cookies["ag-chat-token"];
    if (!token) {
        return next(new Error('Authentication failed. Please login again'));
    }

    const decoded = await tokenVerify(token);
    if(!decoded) {
        return next(new Error('Authentication failed. Please login again'));
    }
    req.userID = decoded._id;
    next();
})