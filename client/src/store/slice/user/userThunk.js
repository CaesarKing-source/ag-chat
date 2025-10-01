import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../../api/utilities/axiosInstance';
import toast from "react-hot-toast";

export const loginUserThunk = createAsyncThunk("user/loginUser", 
async ({username, password}, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.post('/user/login', {
            username,
            password
        });
        toast.success('Login Successful')
        return response.data;
    }
    catch(err) {
        const errMessage = err?.response?.data;
        console.error(errMessage);
        toast.error(errMessage.error);
        return rejectWithValue(errMessage)
    }
});

export const registerUserThunk = createAsyncThunk("user/register", 
    async ({ fullName, username, email, password, gender }, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.post('/user/register', {
            full_name: fullName,
            username,
            email,
            password,
            gender
        });
        toast.success('Registration Successful')
        return response.data;
    }
    catch(err) {
        const errMessage = err?.response?.data;
        console.error(errMessage);
        toast.error(errMessage.error);
        return rejectWithValue(errMessage)
    }
});

export const logoutUserThunk = createAsyncThunk("user/logout", 
async ({_}, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.get('/user/logout');
        toast.success('Logout Successful')
        return response?.data;
    }
    catch(err) {
        const errMessage = err?.response?.data;
        console.error(errMessage);
        toast.error(errMessage.error);
        return rejectWithValue(errMessage);
    }
})