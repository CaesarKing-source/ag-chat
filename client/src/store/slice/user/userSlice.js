import { createSlice } from "@reduxjs/toolkit"
import { loginUserThunk, logoutUserThunk, registerUserThunk } from "./userThunk";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(loginUserThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.user = action.payload?.user;
            state.isAuthenticated = true;
            state.isLoading = false
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.isLoading = false
        })

        // register
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.user = action.payload?.user;
            state.isAuthenticated = true;
            state.isLoading = false
        })
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.isLoading = false
        })


        // logout 
        builder.addCase(logoutUserThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        })
        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
});

export const { } = userSlice.actions;
export default userSlice.reducer;