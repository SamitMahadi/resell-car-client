import React from 'react';

const AllCategoryCard = ({ car }) => {
    const { name, location, oprice, rprice, img, uyear, sellername, postdate } = car
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <h2 className='text-xl'>Orginal price: {oprice} bdt</h2>
                    <h2 className='text-xl font-bold'>Resell price: {rprice} bdt</h2>
                    <h2 className='text-xl'>Years Of Use:{uyear} year</h2>
                    <h2 className='text-xl'>Seller Name: {sellername}</h2>
                    <h2 className='text-xl'>Post Date: {postdate}</h2>
                    <h2 className='text-xl'>Location: {location}</h2>

                    <div className="card-actions justify-end">
                        <button className="btn bg-red-700">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategoryCard;