import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Cars from "../../Pages/Cars/Cars/Cars";
import AllCategory from "../../Pages/Cars/Category/AllCategory";
import Category from "../../Pages/Cars/Category/Category";
import PrivateRoute from '../PrivateRoute/PrivateRoute'


import Home from '../../Pages/Home/Home/Home';
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DashboardLayout from "../../Layouts/DashboardLayout";


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
                element: <PrivateRoute><Cars></Cars></PrivateRoute>
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
                element: <PrivateRoute><AllCategory></AllCategory></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
               
            },

            

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {

            }
        ]
    }

])
export default router;