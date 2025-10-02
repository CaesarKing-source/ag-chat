import { createSlice } from "@reduxjs/toolkit"
import { getOtherUserThunk, getProfileThunk, loginUserThunk, 
    logoutUserThunk, registerUserThunk } from "./userThunk";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
    otherUsers: null,
    selectedUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
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

        // profile
        builder.addCase(getProfileThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.user = action.payload?.user || null;
            state.isAuthenticated = !!action.payload?.user;
            state.isLoading = false;
        })
        builder.addCase(getProfileThunk.rejected, (state, action) => {
            state.isLoading = false;
        })

        // other users
        builder.addCase(getOtherUserThunk.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getOtherUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.otherUsers = action.payload.users
        })
        builder.addCase(getOtherUserThunk.rejected, (state, action) => {
            state.isLoading = false;
        })
    }
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;