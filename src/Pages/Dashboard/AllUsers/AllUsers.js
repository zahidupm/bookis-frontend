import { useQuery } from '@tanstack/react-query';
import React from 'react';
import swal from 'sweetalert';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            return data;
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                swal({title: 'Make Admin Successful', icon: 'success'})
                console.log(data);
                refetch();
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl mb-6'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   users.length &&
                            users?.map((user, i) => <tr key={i}>
                            <th>{i+1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td>
                                {
                                    user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Make Admin</button>
                                }
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

export default AllUsers;