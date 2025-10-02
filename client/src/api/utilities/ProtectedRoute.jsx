import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector(state => state.user);
  const navigate = useNavigate();  

  useEffect(() => {
    if(!isLoading && !isAuthenticated) navigate('/login'); 
  }, [isAuthenticated, isLoading])
  
  return children
}

export default ProtectedRoute
