import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  return (
    <div className='relative'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Outlet />
    </div>
  )
}

export default App
