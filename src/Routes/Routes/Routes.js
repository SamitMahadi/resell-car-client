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
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import Blogs from "../../Pages/Blogs/Blogs";
import Error from "../../Pages/Shared/Error/Error";
import AllUsers from "../../Pages/Dashboard/AllUser/AllUsers";
import AdminRoute from "../adminRoute/AdminRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import SellerRoute from '../sellerRoute/SellerRoute'

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,

        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cars',
                element: <PrivateRoute><Cars></Cars></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },

            {
                path: '/category/:id',
                element: <PrivateRoute><AllCategory></AllCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://resell-car-server.vercel.app/category/${params.id}`)

            },



        ]
    },

    {
        path: '/dashboard',
        errorElement: <Error></Error>,
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            },
            
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://resell-car-server.vercel.app/bookings/${params.id}`)
            },
            
        ]
    }

])
export default router;