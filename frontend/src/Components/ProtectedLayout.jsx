import {Outlet} from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext.jsx";
import {useEffect} from "react";
import axiosClient from "../Axios.js";

function ProtectedLayout() {
    const {setUser} = useAuth();

    useEffect(() => {
        (async () => {
            try{
                const resp = await axiosClient.get('/user');
                if (resp.status === 200) {
                    setUser(resp.data.user);
                }else{
                    window.location.href="/login";
                }
            }catch(error){
                if (error.response.status === 401){
                    localStorage.removeItem('user');
                    window.location.href="/login";
                }
            }
        })()
    },[]);
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default ProtectedLayout;