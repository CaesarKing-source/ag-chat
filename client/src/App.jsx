import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  return (
    <div className='relative'>
      <Outlet />
    </div>
  )
}

export default App
