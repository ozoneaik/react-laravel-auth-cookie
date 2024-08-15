import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {route} from "./Routes/MainRoute.jsx";
import {AuthProvider} from "./Contexts/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <RouterProvider router={route}/>
    </AuthProvider>
)
