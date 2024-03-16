import useConversation from "../../zustand/useConversation.js";

const Conversation = (conversation , lastIdx)=>{

    
    const {selectedConversation , setSelectedConversation} = useConversation(); 
    const isSelected = selectedConversation ?._id === conversation._id;

    return <>
    <div className={`flex gap-2 items-center hover:bg-gray-400  rounded p-2 cursor-pointer ${isSelected ? "bg-gray-400" : ""}`}>
        <div className="w-12 rounded-full avatar online">
            <img src={conversation.profilePic}/>
        </div>
        <div>
            <p className="font-bold text-gray-800 ">{conversation.fullName}</p>
        </div>    
    </div>
    
    {!lastIdx && <div className='divider my-0 py-0 h-1' /> }
    </>
}
export default Conversation;