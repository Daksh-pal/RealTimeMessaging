import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () =>{
    return (
        <div className="flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden ">
            <Sidebar/>
            <MessageContainer/>
        </div>
    )
}
export default Home;