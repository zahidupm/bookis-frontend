import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth.context';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/categories/my_products?email=${user?.email}`;
    const {data: categories = [], isLoading} = useQuery({
        queryKey: ['categories', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl pb-6'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories?.map((category, i) => <tr key={i}>
                            <th>{i+1}</th>
                            <td>{category?.title}</td>
                            <td>{category?.resale_price}</td>
                            <td>
                            <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Available</button>
                            </td>
                            <td>
                                <button className='bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded-sm'>Delete</button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;