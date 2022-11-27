import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
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
                    
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/all_users'>All Users</Link></li>
                    </ul>
                
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;