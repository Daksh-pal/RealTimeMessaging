import MessageInput from "./MessageInput";
import Messages from "./Messages";
import {TiMessages} from "react-icons/ti"

const MessageContainer = () =>{ 
    const noChatSelect = true;
    return (
         <div className="flex flex-col md:min-w-[450px]">
            {
                noChatSelect?<NoChatSelected/>:<ChatSelected/>
            }
         </div>
    )
}
export default MessageContainer;

const ChatSelected =()=>{
            return(
                <>
                <div className="bg-gray-800 px-4 py-2 mb-2">
                    <span className="label-text text-white">To:</span>
                    <span className="font-bold text-white">Daksh pal</span>
                </div>
                <Messages/>
                <MessageInput/>
                </>
            )
}
const NoChatSelected = ()=>{
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2">
                <p>Welcome Daksh Pal,</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}