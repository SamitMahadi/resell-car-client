import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Cars from "../../Pages/Cars/Cars/Cars";
import Category from "../../Pages/Cars/Category/Category";


import Home from '../../Pages/Home/Home/Home';
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";


 const router = createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children:[

            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/cars',
                element: <Cars></Cars>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
               
            },

        ]
    }

])
export default router;