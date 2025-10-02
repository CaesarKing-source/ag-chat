import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logoutUserThunk } from '../store/slice/user/userThunk';
import toast from 'react-hot-toast';
import { persistor } from '../store/store';

const MainUserCard = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logoutUserThunk());
      persistor.purge();
      navigate('/login');
    }
    catch(err) {
      toast.error('Logout failed');
    }
  }
  return (
    <div className="user-card flex gap-4 items-center p-2">
        <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
            <img src="https://wallpapers.com/images/featured/spiderman-p4ashmgeamn2mvkn.jpg" />
        </div>
        </div>
        <div className="user-card-footer w-full flex justify-between items-center">
            <div className='user-details'>
                <p className='line-clamp-1 font-medium'>{user?.full_name}</p>
                <p className='text-xs text-gray-200'>{user?.username}</p>
            </div>
            <div className="user-actions flex items-center gap-2">
            <button onClick={handleLogout} className="p-1">
              <IoIosLogOut className="text-accent" size={23} />
            </button>
              <IoSettings  className='text-accent cursor-pointer' size={20} />
            </div>
        </div>
    </div>
  )
}

export default MainUserCard
