import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/utilities/axiosInstance";
import toast from "react-hot-toast";

export const sendMessageThunk = createAsyncThunk("message/sendMessage", 
async ({ receiverID, message }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/message/send-message/${receiverID}`, 
        { message });
        return response.data;
    }
    catch(err) {
        const errMessage = err?.response?.data;
        console.error(errMessage);
        return rejectWithValue(errMessage);
    }
});

export const getMessageThunk = createAsyncThunk("message/getMessage", 
async ({ receiverID }, {rejectWithValue}) => {
    try {
        const response = await axiosInstance.get(`/message/get-messages/${receiverID}`);
        return response.data;
    }
    catch(err) {
        const errMessage = err?.response?.data;
        console.error(errMessage);
        toast.error(errMessage.message);
        return rejectWithValue(errMessage);
    }
}); 