import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const conversationModel = mongoose.model("conversations", conversationSchema);
export default conversationModel;