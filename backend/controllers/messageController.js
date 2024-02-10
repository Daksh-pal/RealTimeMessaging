import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js"

export const sendMessages = async(req,res) => {
    try {

        const {message} = req.body;
        // we have renamed id as receiverId
        const {id:receiverId} = req.params;
        const senderId = req.user._id
        let conversation = await Conversation.findOne({
            // Here $all helps us to find all the fields inside participants
            participants:{$all :[senderId , receiverId]},

        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId , receiverId],

            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),newMessage.save()]);
        res.status(201).json(newMessage);

    } catch (error) {

        console.log("Error in sending the message")
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessages = async(req,res)=>{
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");
        
        if(!conversation){
            console.log("No Convo till now")
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error ->",error);
        res.status(500).json({error: "Internal server error"})
    }
}