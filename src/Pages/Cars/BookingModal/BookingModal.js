import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({car,setCar, refetch}) => {

    const {name:carName,rprice,img} =car

    const { user } = useContext(AuthContext)


    const handleBooking = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const email = form.email.value;
        

        // console.log(name,price,location,phone,email);
        const booking = {
            carName,
            name,
            email,
            phone,
            price,
            location,
            img

        }
        fetch('https://resell-car-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
                    setCar(null)
                    toast.success('Booking Confirmed');
                    refetch()
                    
                }
                else{
                    toast.error(data.message)
                }

            })



    }


    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{carName}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6 mt-10'>
                    <input type="text" name='price' disabled value={rprice} className="input input-bordered w-full" />
                    <input type="text"name='location' placeholder='your preferd location'required className="input input-bordered w-full" />
                    <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full" />
                    <input type="text" name='phone' placeholder="Phone Numer" required className="input input-bordered w-full" />
                    <input type="text" name='email' defaultValue={user?.email} disabled readOnly placeholder="Email Adress" className="input input-bordered w-full" />
                    <button className="btn bg-red-700 w-full text-white" type='submit' value='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    );
};

export default BookingModal;