import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CategoriesItem from '../../Category/Categories/CategoriesItem';
import CategoryModal from '../../Category/Categories/CategoryModal';
import Loading from '../../Shared/Loading/Loading';

const Secondhand = () => {
    const [treatment, setTreatment] = useState(null);

    const {data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://bookis.vercel.app/categories`)
            const data = await res.json()
            return data;
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div> 
            <div>
                <h2 className='text-3xl font-bold text-center'>Your all favourite second hand books here</h2>
            </div>
            {
                treatment && 
                <CategoryModal 
                treatment={treatment}
                setTreatment={setTreatment}
                ></CategoryModal>
            }
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full bg-gray-100 py-12">
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
    );
};

export default Secondhand;