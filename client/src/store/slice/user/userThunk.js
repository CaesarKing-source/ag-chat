import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserThunk = createAsyncThunk("user/fetchUser", async () => {
    console.log('User fetched successfully')
})