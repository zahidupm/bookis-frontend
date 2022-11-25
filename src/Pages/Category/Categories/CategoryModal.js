import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth.context';

const CategoryModal = ({treatment}) => {
    const {user} = useContext(AuthContext);
    const {title: bookName, resale_price} = treatment;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            treatment: bookName,
            buyer: name,
            title,
            email,
            phone,
            location
        }
        console.log(booking);
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
                        <input name='name' id="name" defaultValue={user?.displayName} type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="title" className="text-sm">Title</label>
                        <input name='title' id="title" defaultValue={bookName} readOnly type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name='email' id="email" defaultValue={user?.email} readOnly type="email" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-sm">Price</label>
                        <input name='price' id="price" defaultValue={resale_price} readOnly type="text" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm">Phone</label>
                        <input name='phone' id="price" type="text" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="location" className="text-sm">Location</label>
                        <input name='location' id="location" type="text" className="w-full p-3 rounded dark:bg-gray-300" />
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-black text-white">Send Message</button>
                </form>
                <div className="modal-action">
                <label htmlFor="category-modal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryModal;