import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import useBuyer from '../hooks/useBuyer';
import Loading from '../Pages/Shared/Loading/Loading';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

    if(loading, isBuyerLoading) {
        return <Loading></Loading>
    }

    if(user && isBuyer) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default BuyerRoute;