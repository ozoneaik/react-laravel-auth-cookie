import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext.jsx";

function GuestLayout() {
    const {user} = useAuth();

    if (user){
        return <Navigate to={'/home'}/>
    }
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default GuestLayout;