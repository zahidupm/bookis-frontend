import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const Checkoutform = ({booking}) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { price, email, buyer, _id } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://bookis.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: buyer,
                  email: email
                },
              },
            },
          );

          if(confirmError) {
            setCardError(confirmError.message);
            return;
          }
          if(paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // save payment to the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,
            }
            fetch(`https://bookis.vercel.app/payments`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId) {
                    setSuccess('Congrats! Your payment completed');
                    setTransactionId(paymentIntent.id);
                }
            })
          }
          setProcessing(false);
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className='bg-blue-400 px-4 py-2 mt-4 hover:bg-blue-600 rounded-sm text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>  
        <p className="text-red-600 mt-4">{cardError}</p>
        {
            success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Your transactionId: <span className='font-bold text-blue-400'>{transactionId}</span></p>
            </div>
        }
        </>
    );
};

export default Checkoutform;