import {useState} from "react";
import {useAuth} from "../Contexts/AuthContext.jsx";
import axiosClient from "../Axios.js";
import {Link, Navigate} from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState('aofphuwadech@gmail.com');
    const [password, setPassword] = useState('G_211044g');
    const {csrfToken ,setUser} = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {email, password};
        await csrfToken();
        try {
            const resp = await axiosClient.post('/login', body);
            if (resp.status === 200) {
                setUser(resp.data.user);
                return <Navigate to="/profile" />;
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="">email</label>
                    <input defaultValue={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="">password</label>
                    <input defaultValue={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type={"submit"}>Login</button>
            </form>
            <Link to={'/register'}>register</Link>
        </div>
    );
}

export default LoginPage;