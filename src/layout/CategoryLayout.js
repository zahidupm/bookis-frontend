import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const CategoryLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-row md:mx-auto'>
                {/* course item */}
                <div className='basis-3/4 right-side-category bg-gray-50'>
                    <Outlet></Outlet>
                </div>

                <div className='basic-1/4 left-side-category'>
                    {/* side bar */}
                    {/* <LeftSideNav></LeftSideNav> */}
                </div>

            </div>
                <Footer></Footer>
            
        </div>
    );
};

export default CategoryLayout;