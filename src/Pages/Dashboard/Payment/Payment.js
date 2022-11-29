import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkoutform from './Checkoutform';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const {title, price} = booking;

    // if(navigation.state === 'loading') {
    //     return <Loading></Loading>
    // }
    
    return (
        <div>
            <h2 className='text-3xl text-center'>Make Payment for {title}</h2>
            <p className='text-2xl text-center'>Please pay <strong className='text-green-400'>${price}</strong> for this book</p>
            <div className='w-96 my-12 px-12'>
                <Elements stripe={stripePromise}>
                    <Checkoutform
                    booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;