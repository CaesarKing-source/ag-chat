import React from 'react'
import { IoSearch } from "react-icons/io5";
import UserCard from './UserCard';
import MainUserCard from './MainUserCard';

const UserSidebar = () => {
  return (
    <div className='w-[30rem] h-screen flex flex-col gap-5 p-3 border-r-[1px] border-gray-200'>
      <h2 className='text-2xl font-bold uppercase text-accent'>AG Chats</h2>
      <div>
        <label className="input">
            <IoSearch />
            <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className='user-listing h-full overflow-y-scroll'>
        <UserCard />
        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />        <UserCard />

      </div>    
      <div className="main-user bg-gray-800">
        <MainUserCard />
      </div>
    </div>
  )
}

export default UserSidebar
