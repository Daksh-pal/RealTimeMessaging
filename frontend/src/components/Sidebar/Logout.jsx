import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from "../../contextAndHooks/useLogout";
const Logout = () => {

    const {logout, loading} = useLogout();

    return (
        <div className="mt-10">
            {!loading ? 
           ( <RiLogoutBoxLine className="w-6 h-6 text-black cursor-pointer" onClick={logout}/>  ):
           (<span className="loading loading-spinner"></span>
             )
        }
        </div>
    )
}
export default Logout;