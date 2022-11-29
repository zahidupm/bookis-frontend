import { useQuery } from '@tanstack/react-query';
import React from 'react';
import swal from 'sweetalert';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const url = `https://bookis.vercel.app/users/all_sellers`;
    const {data: sellers = [], isLoading, refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    const handleMakeVerified = id => {
        fetch(`https://bookis.vercel.app/users/verified/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                swal({title: 'Verified Successful', icon: 'success'})
                console.log(data);
                refetch();
            }
        })
    }

    const handleDelete = user => {
        fetch(`https://bookis.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                swal({title: `User deleted successfully`, icon: 'success'})
                refetch();
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl mb-6'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Verified</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   sellers?.length &&
                            sellers?.map((seller, i) => <tr key={i}>
                            <th>{i+1}</th>
                            <td>{seller?.name}</td>
                            <td>{seller?.email}</td>
                            <td>{seller?.role}</td>
                            <td>
                                {
                                   seller?.status === 'verified' ?  <svg
                                   className="w-6 h-6 text-blue-400"
                                   viewBox="0 0 24 24"
                                   strokeLinecap="round"
                                   strokeWidth="2"
                                 >
                                   <polyline
                                     fill="none"
                                     stroke="currentColor"
                                     points="6,12 10,16 18,8"
                                   />
                                   <circle
                                     cx="12"
                                     cy="12"
                                     fill="none"
                                     r="11"
                                     stroke="currentColor"
                                   />
                                 </svg> : <button onClick={() => handleMakeVerified(seller._id)} className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Verified</button>
                                }
                            </td>
                            <td>
                                <button onClick={() => handleDelete(seller)} className='bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded-sm'>Delete</button>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;