import React from 'react'
import UserCard from './UserCard'
import ChatMessage from './ChatMessage'
import { FaPlus } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-4 p-3'>
      <div className="user-profile-chat border-b-[1px] border-gray-200">
        <UserCard />
      </div>

      <div className="chat-window h-screen overflow-y-scroll">
        <ChatMessage />
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
    </div>
  )
}

export default MessageContainer
