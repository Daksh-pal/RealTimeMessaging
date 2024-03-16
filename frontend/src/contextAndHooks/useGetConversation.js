import { useEffect, useState } from "react"
import axios from 'axios';
import toast from "react-hot-toast";

const useGetConversation = () => {

const [loading , setLoading] = useState(false);
const [conversation , setConversation] = useState([]);

useEffect(()=>{
    const getConversations = async()=>{
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/api/users");
            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setConversation(data);
        } catch (error) {
            toast.error(error.message); 
        }
        setLoading(false);
    }
    getConversations();
},[])
return {loading, conversation};
}
export default useGetConversation