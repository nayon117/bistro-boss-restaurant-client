import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Shared/Loading';

const PrivateRoute =({children}) => {
    const { user, loading } = useAuth() 
    const location = useLocation()

    if (loading) {
        return  <Loading></Loading>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from:location}}  to='/login' replace></Navigate>
};

PrivateRoute.propTypes = {
    children:PropTypes.node
};

export default PrivateRoute;