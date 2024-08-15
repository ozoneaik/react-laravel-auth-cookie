import {createBrowserRouter} from "react-router-dom";
import GuestLayout from "../Components/GuestLayout.jsx";
import Login from "../Views/Login.jsx";
import Register from "../Views/Register.jsx";
import ProtectedLayout from "../Components/ProtectedLayout.jsx";
import HomePage from "../Views/HomePage/page.jsx";
import NotFoundPage from "../Views/NotFoundPage/page.jsx";
import App from "../App.jsx";

export const route = createBrowserRouter([
    {path: '/', element: <App/>},
    {
        path: '/', element: <GuestLayout/>, children: [
            {path: '/login', element: <Login/>},
            {path: '/register', element: <Register/>},
        ],
    },
    {
        path: '/', element: <ProtectedLayout/>, children: [
            {path: '/home', element: <HomePage/>},
        ],
    },
    {path: '*', element: <NotFoundPage/>}
])