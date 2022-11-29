import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FaDungeon, FaGraduationCap } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../configs/firebase.config';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://bookis.vercel.app/categoryName`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className="flex flex-col h-full p-3 w-80 item-sidebar b-dark bg-light-700">
            <div className="space-y-3">
                <div className="flex items-center font-bold text-2xl">
                    <FaDungeon className="w-5 h-5 fill-current dark:text-gray-400"></FaDungeon>
                    <span className='ml-4'>Books Category</span>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm">
                                <NavLink rel="noopener noreferrer" to={`/categories`} className={({isActive}) => isActive ? 'flex items-center p-2 space-x-3 rounded-md font-medium tracking-wide text-[#4349f0] t-dark bg-[#eef4ff] transition-colors duration-200 hover:text-deep-purple-accent-400' : 'flex items-center p-2 space-x-3 rounded-md font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}>
                                    <FaGraduationCap className="w-5 h-5 fill-current dark:text-gray-400"></FaGraduationCap>
                                    <span className='text-xl'>All</span>
                                </NavLink>
                            </li>
                        {
                            categories?.map(category => 
                            // <p key={item.id}>
                            //     <Link to={`item/${item.id}`}>{item.name}</Link>
                            // </p>
                            <li key={category.category_id} className="rounded-sm">
                                <NavLink rel="noopener noreferrer" to={`../category/${category.category_id}`} className={({isActive}) => isActive ? 'flex items-center p-2 space-x-3 rounded-md font-medium tracking-wide text-[#4349f0] t-dark bg-[#eef4ff] transition-colors duration-200 hover:text-deep-purple-accent-400' : 'flex items-center p-2 space-x-3 rounded-md font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'}>
                                    <FaGraduationCap className="w-5 h-5 fill-current dark:text-gray-400"></FaGraduationCap>
                                    <span className='text-xl'>{category.category_name}</span>
                                </NavLink>
                            </li>
                            )
                        }
                        <li className="rounded-sm">
                            <Link rel="noopener noreferrer" to="" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <span onClick={() => signOut(auth)}>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RightSideNav;