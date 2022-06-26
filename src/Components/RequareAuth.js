import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from './Firebase.init';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location =useLocation();
    if(loading){
      return <Skeleton  height={10} /> 
    }

    if(!user){
        return <Navigate to="/login"  state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAuth;