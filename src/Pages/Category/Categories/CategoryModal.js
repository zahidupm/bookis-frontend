import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../contexts/auth.context';

const CategoryModal = ({treatment, setTreatment}) => {
    const {user} = useContext(AuthContext);
    const {title, resale_price} = treatment;
    console.log(treatment.resale_price);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;
        const booking = {
            title,
            buyer: name,
            email,
            phone,
            price,
            location
        }
        
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                setTreatment(null);
                swal({title: "Booking successful", icon: "success"});
            }
        })

    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="category-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input name='name' id="name" value={user?.displayName} type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="title" className="text-sm">Title</label>
                        <input name='title' id="title" value={title} readOnly type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name='email' id="email" defaultValue={user?.email} readOnly type="email" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-sm">Price</label>
                        <input name='price' id="price" value={resale_price} readOnly type="text" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm">Phone</label>
                        <input name='phone' id="phone" type="text" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="location" className="text-sm">Location</label>
                        <input name='location' id="location" type="text" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-black text-white">Book</button>
                </form>
                <div className="modal-action">
                <label htmlFor="category-modal" className="bg-blue-400 hover:bg-blue-700 py-2 px-4 rounded-sm bold text-white">Close!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryModal;