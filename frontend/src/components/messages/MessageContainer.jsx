import Messages from "./Messages";
const MessageContainer = () =>{ 
    return (
         <div className="flex flex-col md:min-w-[450px]">
            <>
            {/* Header  */}
                <div className="bg-green-300 px-4 py-2 mb-2">
                    <span className="label-text">To:</span>
                    <span className="font-bold text-green-900">Daksh pal</span>
                </div>
                {/* Messages  */}
                <Messages/>
            </>
         </div>
    )
}
export default MessageContainer;