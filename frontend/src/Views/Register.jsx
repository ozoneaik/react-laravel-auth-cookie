import {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext.jsx";
import axiosClient from "../Axios.js";
import {RegisterApi} from "../Api/Auth.js";

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");

    const {setUser} = useAuth();

    const handleSubmit  = async (e) => {
        e.preventDefault();
        const body = {name,email,password,password_confirmation};
        const {data,status} = await RegisterApi(body);
        console.log('response >> ',data,status);
        if (status === 200) {
            setUser(data.user);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="">name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="">email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="">password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={'form-group'}>
                    <label htmlFor="">password_confirmation</label>
                    <input type="password" onChange={(e) => setPassword_confirmation(e.target.value)}/>
                </div>
                <button type={'submit'}>register</button>
            </form>
            <Link to={'/login'}>login</Link>
        </div>
    );
}

export default RegisterPage;