import React from 'react';

const CarType = ({ card }) => {
    const { img, name } = card
    return (
        <div>
            <div>
                <figure className='border-2 border-base-100 px-5 py-5'>
                    <img src={img} alt="" />
                </figure>
                <h2 className='text-2xl text-center'>{name}</h2>
            </div>
        </div>
    );
};

export default CarType;