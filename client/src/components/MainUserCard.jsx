import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logoutUserThunk } from '../store/slice/user/userThunk';

const MainUserCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await dispatch(logoutUserThunk);
    navigate('/login');
  }
  return (
    <div className="user-card flex gap-4 items-center p-2">
        <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
        </div>
        <div className="user-card-footer w-full flex justify-between items-center">
            <div className='user-details'>
                <p className='line-clamp-1 font-medium'>Spiderman</p>
                <p className='text-xs text-gray-200'>Username</p>
            </div>
            <div className="user-actions flex items-center gap-2">
                <IoIosLogOut onClick={handleLogout} className='text-accent cursor-pointer' size={23} />
                <IoSettings  className='text-accent cursor-pointer' size={20} />
            </div>
        </div>
    </div>
  )
}

export default MainUserCard
