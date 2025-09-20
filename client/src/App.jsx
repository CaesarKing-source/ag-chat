import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

const App = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  return (
    <div className='relative'>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
