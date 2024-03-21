import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation.js'
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const[loading,setLoading] = useState(false);
    const[messages , setMessages,selectedConversation] = useConversation();

    useEffect(()=>{
        const getMessages = async()=>{
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/api/messages/${selectedConversation._id}`)
                const data = await response.json();
                if(data.error){
                    throw new Error(data.error)
                }
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        }

        if(selectedConversation?._id) getMessages();
    },[selectedConversation?._id,setMessages])
return {messages,loading};
}

export default useGetMessages