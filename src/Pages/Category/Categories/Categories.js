import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoriesItem from '../../Category/Categories/CategoriesItem';
import Loading from '../../Shared/Loading/Loading';

const Categories = () => {
    
    const {data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json()
            return data;
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        categories?.map(category => <CategoriesItem
                        key={category._id}
                        category={category}
                        ></CategoriesItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;