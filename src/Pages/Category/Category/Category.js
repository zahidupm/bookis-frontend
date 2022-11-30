import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../../index.css';
import Loading from '../../Shared/Loading/Loading';
import CategoriesItem from '../Categories/CategoriesItem';
import RightSideNav from '../RightSideNav/RightSideNav';

const Category = () => {
    // const [categories, setCategories] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const [loading, setLoading] = useState(false);
    const categories = useLoaderData();

    // useEffect(() => {
    //     fetch(`https://bookis.vercel.app/category/${id}`)
    //     .then(res => res.json())
    //     .then(data => setCategories(data))
    // }, [])

    if(loading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='flex'>
            <div className='w-3/4 bg-gray-100'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {   categories.length &&
                        categories?.map(category => <CategoriesItem
                        key={category._id}
                        category={category}
                        setTreatment={setTreatment}
                        ></CategoriesItem>)
                    }
                </div>
            </div>
            </div>
            <div className='w-1/4 category-right-nav'>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Category;