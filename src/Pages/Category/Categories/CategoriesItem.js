import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesItem = ({category, setTreatment}) => {
    // console.log(category);
    const {published_date, title, image_url, Seller, original_price, resale_price, years_of_use, location,} = category;
    return (
        <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                <Link href="/" aria-label="Article">
                    <img
                src={image_url}
                alt=""
                className='w-full h-84'
                />
                </Link>
                <div className="py-5 px-4">
                    <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                    {published_date}
                    </p>
                    <Link
                    to=''
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                    <p className="text-2xl font-bold leading-5">{title}</p>
                    </Link>
                    <p className="mb-2 font-bold text-gray-700">
                      Original Price: ${original_price}
                    </p>
                    <p className="mb-2 font-bold text-gray-700">
                      Resale Price: ${resale_price}
                    </p>
                    <p className="mb-2 font-bold text-gray-700">
                      Location: {location}
                    </p>
                    <p className="mb-2 font-bold text-gray-700">
                      Years of use: {years_of_use}
                    </p>
                    <p className="mb-2 font-bold text-gray-700">
                      Seller: {Seller}
                    </p>
                    {/* <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Book Now</button> */}
                    <label onClick={() => setTreatment(category)}
                     htmlFor="category-modal" className='bg-blue-400 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-sm'>Book Now</label>
                    </div>
                </div>
        </div>
    );
};

export default CategoriesItem;