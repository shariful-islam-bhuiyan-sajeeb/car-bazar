import { createBrowserRouter } from "react-router-dom";
import Aboute from "../../About/Aboute";
import Home from "../../HomePage/Home/Home";
import Main from "../../Layout/Main";
import Media from "../../Media/Media";
import Login from "../../SigningPage/Login/Login";
import SingUp from "../../SigningPage/SingUp/SingUp";

export const router= createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/aboute',
                element: <Aboute/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/singUP',
                element: <SingUp/>
            },
            {
                path: '/media',
                element: <Media/>
            }
        ]
    }
])