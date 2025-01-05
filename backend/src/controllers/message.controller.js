import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import cloudinary from '../lib/cloudinary.js';
import { getReceiverSocketId, io } from '../lib/socket.js';

export const getUser = async (req, res) => { 
    try {
        const loggedInUser = req.user._id;
        const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select('-password');
        
        res.status(200).json(filteredUser);
    }
    catch (error) {
        console.log('Error on getUser: ', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id:userToChatId } = req.params;
        const myId = req.user._id;
        const messages = await Message.find({
            $or: [
                { senderId: myId, recieverId: userToChatId },
                { senderId: userToChatId, recieverId: myId }
            ],
        });
        
        res.status(200).json(messages);
    }
    catch (error) { 
        console.log('Error on getMessages: ', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        if (!text && !image) {
            return res.status(400).json({ error: 'Please enter a message' });
        }
        
        let imageUrl;
        if (image) { 
            // Upload image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        // socket.io emit event to the receiver user to update the chat in real-time 
        const receiverSocketId = getReceiverSocketId(recieverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage', newMessage);
        }

        res.status(200).json(newMessage);

    }
    catch (error) {
        console.log('Error on sendMessage: ', error.message);
        res.status(500).json({ error: 'Something went wrong' });
        
    }
}