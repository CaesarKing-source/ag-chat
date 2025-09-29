import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../../api/utilities/axiosInstance';
import toast from "react-hot-toast";

export const loginUserThunk = createAsyncThunk("user/loginUser", 
async ({username, password}, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.post('/user/login', {
            username,
            password
        })
        console.log(response);
        return response.data;
    }
    catch(err) {
        const errMessage = err?.response?.data;
        console.error(errMessage);
        toast.error(errMessage.error);
        return rejectWithValue(errMessage)
    }
})