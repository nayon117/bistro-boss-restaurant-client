import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const {user,loading} = useAuth()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <p>loading...</p>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={{from:location}}  to='/login' replace></Navigate>
};
export default AdminRoute;