import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Spacial/firebase_init';

const ProtectedPath = ({children}) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedPath;