import {createContext, useContext, useState} from "react";
import axios from "axios";

const AuthContext = createContext({
    user: null,
    setUser: () => {},
    csrfToken: () => {}
});

export const AuthProvider = ({children}) => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const setUser = (user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
        _setUser(user);
    };

    const csrfToken = async () => {
        await axios.get(`${import.meta.env.VITE_BACKEND_URL}/sanctum/csrf-cookie`);
        return true;
    };

    return (
        <AuthContext.Provider value={{user, setUser,csrfToken}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext);
}