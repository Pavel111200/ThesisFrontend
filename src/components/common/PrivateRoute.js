import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const { isAuthenticated} = useUserContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return children ? children : <Outlet />  
};

export default PrivateRoute;