import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/auth.context';
import Loading from '../../Shared/Loading/Loading';

const UserType = () => {
    const {user}= useContext(AuthContext);
    const navigate = useNavigate();

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

    const handleMakeUser = email => {
        fetch(`http://localhost:5000/users/user?email=${user?.email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                swal({title: 'Make User Successful', icon: 'success'})
                console.log(data);
                refetch();
                navigate('/login');
            }
        })
    }

    const handleMakeSeller = email => {
        fetch(`http://localhost:5000/users/seller?email=${user?.email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                swal({title: 'Make Seller Successful', icon: 'success'})
                console.log(data);
                refetch();
                navigate('/login');
            }
        })
    }

    return (
        <div>
            <h2 className='text-3xl mb-6'>Select Your User Type</h2>
            {/* {
                users.map((user, i) => <ul key={i}>
                    <li>
                    <button className='bg-blue-400 hover:bg-blue-700 px-4 py-2 text-white rounded-sm'>User</button>
                    </li>
                    <li>
                    <button className='bg-blue-400 hover:bg-blue-700 px-4 py-2 text-white rounded-sm'>Seller</button>
                    </li>
                </ul>)
            } */}

            <button onClick={handleMakeUser} className='bg-blue-400 hover:bg-blue-700 px-4 py-2 text-white rounded-sm'>User</button>
            <button onClick={handleMakeSeller} className='bg-blue-400 hover:bg-blue-700 px-4 py-2 text-white rounded-sm'>Seller</button>
        </div>
    );
};

export default UserType;