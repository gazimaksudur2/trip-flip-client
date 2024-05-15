import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import NavSkeleton from '../components/skeleton/NavSkeleton';
import CardsSkeleton from '../components/skeleton/CardsSkeleton';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <>
                <NavSkeleton/>
                <CardsSkeleton/>
            </>
        )
    }
    if(user){
        return children;
    }

    return <Navigate to={'/authenticate/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;