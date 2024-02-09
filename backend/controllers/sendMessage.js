import Conversation from "../models/conversationModel.js";

export const sendMessage = async(req,res) => {
    try {

        const {message} = req.body;
        // we have renamed id as receiverId
        const {id:receiverId} = req.body;
        const senderId = req.user._id
        let conversation = await Conversation.findOne({
            // Here $all helps us to find all the fields inside participants
            participants:{$all :[senderId , receiverId]}

        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId , receiverId],

            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        res.status(201).json(newMessage);

    } catch (error) {

        console.log("Error in sending the message")
        res.status(500).json({error:"Internal server error"});
    }
}