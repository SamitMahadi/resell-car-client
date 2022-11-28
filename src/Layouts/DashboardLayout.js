import React, { useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet, Link } from 'react-router-dom';
import logo from '../Assets/logo-light.png'
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer" >
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar text-white bg-red-700">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <img src={logo} alt='' className="w-52" />
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal ml-56">

                                <li><Link to='/dashboard'>My Orders</Link></li>
                                {


                                    isAdmin &&
                                    <>
                                        <li><Link to='/dashboard/allusers'>All User</Link></li>
                                    </>


                                }

                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white  bg-red-700">

                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/alluser'>All User</Link></li>

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;