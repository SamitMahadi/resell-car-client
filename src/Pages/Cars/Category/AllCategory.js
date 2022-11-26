import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCategoryCard from './AllCategoryCard';
import BookingModal from '../BookingModal/BookingModal';

const AllCategory = () => {
    const Ccar = useLoaderData();
    const [car, setCar] = useState(null)

    return (
        <div>

            <div className='mt-16 mb-16 mx-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    Ccar.map(car => <AllCategoryCard
                        key={car._id}
                        car={car}
                        AllCategoryCard={car}
                        setCar={setCar}
                    ></AllCategoryCard>)
                }


                {car &&
                    <BookingModal
                        car={car}
                    ></BookingModal>
                }

            </div>
        </div>
    );
};

export default AllCategory;