import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import UserCard from './UserCard';
import MainUserCard from './MainUserCard';
import { useSelector } from 'react-redux';
const UserSidebar = () => {
  const { otherUsers } = useSelector(state => state.user);
  return (
    <div className='w-[30rem] h-screen flex flex-col gap-5 p-3 border-r-[1px] border-gray-200'>
      <h2 className='text-2xl flex items-center gap-2 font-bold uppercase text-accent'>
        AG Chats <IoIosChatbubbles size={30} /></h2>
      <div>
        <label className="input">
            <IoSearch />
            <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className='user-listing h-full overflow-y-scroll'>
       {
        otherUsers?.map((user, index) => {
          return <UserCard key={index} user={user} />
        })
       }
      </div>    
      <div className="main-user bg-gray-800">
        <MainUserCard />
      </div>
    </div>
  )
}

export default UserSidebar
