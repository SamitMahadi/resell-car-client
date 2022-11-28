import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    const { carName, price,name } = booking;
    if(navigation.state === "loading"){
        return <progress className="progress w-56"></progress>
    }
    
    return (
        <div className='text-center'>
              <h3 className="text-3xl">Payment for {name}</h3>
              <p className="text-xl">Please pay <strong>${price}</strong> for your {carName}</p>
              <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;