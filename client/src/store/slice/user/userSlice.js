import { createSlice } from "@reduxjs/toolkit"
import { loginUserThunk } from "./userThunk";

const initialState = {
    isAuthenticated: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: () => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.pending, () => {
            console.log('pending')
        })
        builder.addCase(loginUserThunk.fulfilled, () => {
            console.log('fullfilled')
        })
        builder.addCase(loginUserThunk.rejected, () => {
            console.log('rejected')
        })
    }
});

export const { } = userSlice.actions;
export default userSlice.reducer;