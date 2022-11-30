import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <label htmlFor="my-drawer-2" className="cursor-pointer lg:hidden pl-6">
                        <svg className='t-white w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                        fill='currentColor'
                        d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                        />
                        <path
                        fill='currentColor'
                        d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                        />
                        <path
                        fill='currentColor'
                        d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                        />
                    </svg>
                </label>
            <div className="drawer drawer-mobile drawer-end">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content bg-[#DCE2CB]">
                    
                    {
                        isAdmin && <>
                            <li><NavLink to='/dashboard/all_users'>All Users</NavLink></li>
                            <li><NavLink to='/dashboard/all_sellers'>All Sellers</NavLink></li>
                            <li><NavLink to='/dashboard/reported_items'>Reported Items</NavLink></li>
                        </>
                    }
                    {
                        isSeller && <>
                            <li><NavLink to='/dashboard/add_product'>Add A Product</NavLink></li>
                            <li><NavLink to='/dashboard/my_products'>My Products</NavLink></li>
                            <li><NavLink to='/dashboard/my_buyers'>My Buyers</NavLink></li>
                        </>
                    }
                    {
                        isBuyer && <>
                            <li><NavLink to='/dashboard/my_orders'>My Orders</NavLink></li>
                        </>
                    }
                    </ul>
                
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;