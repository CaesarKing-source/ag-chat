import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { getOtherUserThunk, getProfileThunk } from './store/slice/user/userThunk'
const App = () => {
  const { user, isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
    
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfileThunk());
      dispatch(getOtherUserThunk());
    }
  }, [isAuthenticated]);

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
