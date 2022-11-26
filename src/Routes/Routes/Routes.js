import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Cars from "../../Pages/Cars/Cars/Cars";
import AllCategory from "../../Pages/Cars/Category/AllCategory";
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
                element: <AllCategory></AllCategory>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
               
            },

        ]
    }

])
export default router;