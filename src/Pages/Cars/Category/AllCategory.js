import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryCard from './AllCategoryCard';

const AllCategory = () => {
    const Ccar = useLoaderData();
    
    return (
        <div>
            
            <div className='mt-16 mb-16 mx-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               Ccar.map(car => <AllCategoryCard
                key={car._id}
                car={car}
               AllCategoryCard={car}
                ></AllCategoryCard>)
            }

        </div>
        </div>
    );
};

export default AllCategory;