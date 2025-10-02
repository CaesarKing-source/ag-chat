import React, { useEffect } from 'react'
import UserCard from './UserCard'
import ChatMessage from './ChatMessage'
import { FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getMessageThunk } from '../store/slice/message/messageThunk';

const MessageContainer = () => {
  const { selectedUser } = useSelector(state => state.user);
  const { messages } = useSelector(state => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if(selectedUser) {
      dispatch(getMessageThunk({ receiverID: selectedUser?._id}))
    } 
  }, [selectedUser]);
  return (
    <>
      { !selectedUser ? <>
      <div className='h-screen w-full flex flex-col items-center justify-center gap-4 p-3'>
        <h2 className='text-2xl text-accent'>Select any user to start the conversation 👋</h2>
      </div>
      </> : 
      <div className='h-screen w-full flex flex-col gap-4 p-3'>
        <div className="user-profile-chat border-b-[1px] border-gray-200">
          <UserCard user={selectedUser}/>
        </div>

        <div className="chat-window h-screen overflow-y-scroll">
          <ChatMessage messages={messages} />
        </div>
    
        <div className="message-area w-full flex items-center gap-3">
          <label className="input w-full">
            <FaPlus />
            <input type="search" required placeholder="Type here...." />
          </label>
          <button className="btn btn-outline btn-accent">
            <IoSend />
          </button>
        </div>
      </div>}
    </>
  )
}

export default MessageContainer
