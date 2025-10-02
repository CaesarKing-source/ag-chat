import { createSlice } from '@reduxjs/toolkit'
import { getMessageThunk, sendMessageThunk } from './messageThunk';
const initialState = {
    buttonLoading: false,
    isLoading: true,
    messages: null,
}

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        // Add your reducer functions here
    },
    extraReducers: (builder) => {
        // send message
        builder.addCase(sendMessageThunk.pending, (state, action) => {
            state.buttonLoading = true
        })
        builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            state.buttonLoading = false
            console.log(action.payload);
        })
        builder.addCase(sendMessageThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })

        // get messages
        builder.addCase(getMessageThunk.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getMessageThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.messages = action.payload?.conversation?.messages
        })
        builder.addCase(getMessageThunk.rejected, (state, action) => {
            state.isLoading = false
        })
    }
});

export const { } = messageSlice.actions;
export default messageSlice.reducer;