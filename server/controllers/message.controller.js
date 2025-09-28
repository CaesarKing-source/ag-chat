import conversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";
import { asyncHandler } from "../utilities/asyncHandler.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
    const senderID = req.userID;
    const receiverID = req.params.receiverID;
    const message = req.body.message;

    if(!senderID || !receiverID || !message) {
        return next(new Error('All fields are required', 400));
    }

    let conversation = await conversationModel.findOne({
        participants: {
            $all: [senderID, receiverID]
        }
    });

    if(!conversation) {
        conversation = await conversationModel.create({
            participants: [senderID, receiverID]
        })
    }

    const newMessage = await messageModel.create({
        senderID,
        receiverID,
        message
    });

    if(!newMessage) {
        return next(new Error('Failed to send message', 500));
    }
    conversation.messages.push(newMessage._id);
    await conversation.save();

    // implementation of socket.io

    res.json({
        success: true,
        message: 'Message sent successfully',
        conversation,
    });
});

export const getMessages = asyncHandler(async (req, res, next) => {
    const myID = req.userID;
    const otherUserID = req.params.receiverID;

    if(!myID ||!otherUserID) {
        return next(new Error('User ID is required for both users', 400));
    }

    const conversation = await conversationModel.findOne({
        participants: {
            $all: [myID, otherUserID]
        }
    }).populate('messages');

    if(!conversation) {
        return next(new Error('No conversation found between the users', 404));
    }

    res.status(200).json({
        success: true,
        message: 'Messages retrieved successfully',
        conversation,
    })
})