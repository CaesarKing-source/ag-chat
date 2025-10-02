import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../store/slice/user/userSlice';

const UserCard = ({ user }) => {
  let pr = user?.full_name?.split(' ')?.map(ch => ch.charAt(0)).join('');

  const { selectedUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(setSelectedUser(user))} 
    className={`user-card flex gap-4 items-center p-2 mb-2 hover:bg-gray-800
    ${selectedUser?._id == user?._id && "bg-gray-800"}
    `}>
        <div className="avatar avatar-online">
        <div className="w-12 h-12 border-2 p-2 rounded-full">
            {/* <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" /> */}
            <span className="text-xl">{pr}</span>
        </div>
        </div>
        <div className='user-details'>
            <p className='line-clamp-1 font-medium'>{user?.full_name}</p>
            <p className='text-xs text-gray-200'>{user?.username}</p>
        </div>
    </div>
  )
}

export default UserCard
