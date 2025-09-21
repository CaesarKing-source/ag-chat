import React from 'react'

const UserCard = () => {
  return (
    <div className="user-card flex gap-4 items-center p-2 mb-2 hover:bg-gray-800">
        <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
        </div>
        <div className='user-details'>
            <p className='line-clamp-1 font-medium'>Full Name</p>
            <p className='text-xs text-gray-200'>Username</p>
        </div>
    </div>
  )
}

export default UserCard
