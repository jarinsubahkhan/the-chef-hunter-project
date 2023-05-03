import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from "react-router";
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Spinner className='mx-auto' animation="border" variant="dark" />
    }

if(user){
    return children;
}

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;