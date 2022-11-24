import React from 'react';

const Service = ({ card }) => {
    const { img } = card
    return (
        <div>
            <figure className='border-2 border-base-100 px-5 py-5'>
                <img src={img} alt="" />
            </figure>
        </div>
    );
};

export default Service;