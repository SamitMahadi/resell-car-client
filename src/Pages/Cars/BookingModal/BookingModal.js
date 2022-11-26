import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({car}) => {

    const {name,rprice} =car

    const { user } = useContext(AuthContext)





    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form  className='grid grid-cols-1 gap-6 mt-10'>
                    <input type="text" disabled value={rprice} className="input input-bordered w-full" />
                    <input type="text" placeholder='your preferd location' className="input input-bordered w-full" />
                    <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full" />
                    <input type="text" name='phone' placeholder="Phone Numer" className="input input-bordered w-full" />
                    <input type="text" name='email' defaultValue={user?.email} disabled readOnly placeholder="Email Adress" className="input input-bordered w-full" />
                    <button className="btn bg-red-700 w-full text-white" type='submit' value='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
    );
};

export default BookingModal;