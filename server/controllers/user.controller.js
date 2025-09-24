import { asyncHandler } from "../utilities/asyncHandler.js"
import { errorHandler } from '../utilities/errorHandler.js'
import userModel from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { cookieOptions } from "../utilities/cookieOptions.js";
import { tokenSignIn } from "../service/token.service.js";

export const registerUser = asyncHandler(async (req, res, next) => {
    const { full_name, email, password, username, gender } = req.body;
    if(!full_name || !email ||!password ||!username) {
        return next(new errorHandler('Please provide all required fields', 400));
    }

    const user = await userModel.findOne({ username, email});
    if(user) {
        return next(new errorHandler('Username or email already exists', 409));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ full_name, email, password: hashedPassword, 
        username, gender });

    const token = tokenSignIn(newUser._id);
    res.status(201).cookie('ag-chat-token', token, cookieOptions).json({
        success: true,
        message: 'User registered successfully',
        token,
    });
});

export const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if(!username ||!password) {
        return next(new errorHandler('Please provide username and password', 400));
    }

    const user = await userModel.findOne({ username });
    if(!user ||!(await bcrypt.compare(password, user.password))) {
        return next(new errorHandler('Invalid username or password', 401));
    }

    const token = tokenSignIn(user._id);
    res.status(200).cookie('ag-chat-token', token, cookieOptions).json({
        success: true,
        message: 'User logged in successfully',
        token,
    });
});