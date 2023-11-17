import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Shared/Loading";

const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()

    const {user,loading} = useAuth()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={{from:location}}  to='/login' replace></Navigate>
};
export default AdminRoute;