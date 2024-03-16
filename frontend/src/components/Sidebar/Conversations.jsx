import useGetConversation from "../../contextAndHooks/useGetConversation.js";
import Conversation from "./Conversation.jsx";
const Conversations = ()=>{

    const {loading , conversations} = useGetConversation();


     if (!conversations) {
        return null; // or you can render a loading indicator or an error message
    }

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
        </div>
    );
};
export default Conversations;