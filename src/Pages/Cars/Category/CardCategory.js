import React from 'react';

const CardCategory = ({ category }) => {

    const {name}=category

    return (
        <div className="stats shadow  bg-red-700 ">

            <div className="stat">
                
                <div className="stat-value text-white text-center">{name}</div>
                
            </div>

        </div>
    );
};

export default CardCategory;