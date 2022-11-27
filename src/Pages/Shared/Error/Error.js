import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../Assets/404-error-with-portals-concept-illustration_114360-7870.webp'

const Error = () => {
    return (
        <div className='text-center'>
            <img src={error} alt="" className='ml-72' />
            <Link to='/login'className='text-center text-red-700 text-3xl'>Go to Login</Link>
        </div>
    );
};

export default Error;