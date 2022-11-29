import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/auth.context';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const url = `https://bookis.vercel.app/categories/my_products?email=${user?.email}`;
    const {data: categories = [], isLoading, refetch} = useQuery({
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

    const handleDelete = category => {
        fetch(`https://bookis.vercel.app/categories/${category._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                swal({title: `Product ${category.title} deleted successfully`, icon: 'success'})
                refetch();
            }
        })
    }

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
                        { categories?.length &&
                            categories?.map((category, i) => <tr key={i}>
                            <th>{i+1}</th>
                            <td>{category?.title}</td>
                            <td>{category?.resale_price}</td>
                            <td>
                            <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Available</button>
                            </td>
                            <td>
                                <label htmlFor="confirmation-modal" onClick={() => setDeletingProduct(category)} className='bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded-sm'>Delete</label>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction = {handleDelete}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;