import React from 'react'
import UserSidebar from '../../components/UserSidebar'
import MessageContainer from '../../components/MessageContainer'

const Home = () => {
  return (
    <div className='flex'>
      <UserSidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
