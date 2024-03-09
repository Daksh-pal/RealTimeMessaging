import {useState} from 'react';
import axios from 'axios';
import {userAuthContext} from "./AuthContext.jsx"
import toast from 'react-hot-toast';

const useLogout = () => {
    const {setAuthUser} = userAuthContext();
    const [loading , setLoading] = useState(false);

    const logout = async()=>{
        setLoading(true);
        try {
            await axios.post('http://localhost:3000/api/auth/logout');
            localStorage.removeItem('user');
            setAuthUser(null);
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
        setLoading(false);
    }
    return {logout, loading};
}

export default useLogout;