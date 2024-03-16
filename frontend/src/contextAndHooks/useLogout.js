import {useState} from 'react';
import axios from 'axios';
import {useAuthContext} from "./AuthContext.jsx"
import toast from 'react-hot-toast';

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			await axios.post('http://localhost:3000/api/auth/logout');
            localStorage.removeItem('user');
            setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;