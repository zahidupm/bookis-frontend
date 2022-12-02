import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth.context';
import Loading from '../Shared/Loading/Loading';

const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `https://bookis.vercel.app/bookings?email=${user?.email}`;
    const {data: bookings = [], isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
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
                            <td><img className='w-20 h-20' src={booking?.image_url} alt="" /></td>
                            <td>{booking?.title}</td>
                            <td>{booking?.price}</td>
                            <td>
                                { booking?.price && !booking?.paid &&
                                    <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Pay</button>
                                    </Link>
                                }
                                { booking?.price && booking?.paid &&
                                    <button className='bg-green-400 text-white px-4 py-2 rounded-sm' disabled>Paid</button>
                                }
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