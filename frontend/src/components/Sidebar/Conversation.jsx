const Conversation = ()=>{
    return <>
    <div className="flex gap-2 items-center hover:bg-gray-400  rounded p-2 cursor-pointer">
        <div className="w-12 rounded-full avatar online">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
        </div>
        <div>
            <p className="font-bold text-gray-800 ">Daksh Pal</p>
        </div>    
    </div>
    <div className='divider my-0 py-0 h-1' />
    </>
}
export default Conversation;