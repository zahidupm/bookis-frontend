import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth.context';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h2 className='text-2xl font-bold pb-6'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={i}>
                            <th>{i+1}</th>
                            <td>{booking?.image}</td>
                            <td>{booking?.title}</td>
                            <td>{booking?.price}</td>
                            <td>
                                <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Pay</button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;