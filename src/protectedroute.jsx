import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'


const  ProtectedRoute=({children})=> {
  const isAuthenticated = useSelector(state=>state.authentication.isAuth);
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
      }
      else{
      return children || Outlet;
  }
      
      
    
}

export default ProtectedRoute;