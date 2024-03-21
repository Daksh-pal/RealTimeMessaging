import useGetMessages from '../../contextAndHooks/useGetMessages'
import Message from './Message'
import MessageSkeleton from './MessageSkeletons';

const Messages = () => {
  const {messages , loading} = useGetMessages();
  return (
    <div className='flex-1 px-4 overflow-auto'>
      {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
    </div>
  )
}

export default Messages