import React, { useEffect, useState } from 'react';
import Car from './Car';
import AllCategory from '../Category/AllCategory';

const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='mt-16 mb-16 mx-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cars.map(car => <Car
                key={car._id}
                car={car}
                AllCategory={car}
                ></Car>)
            }

        </div>
    );
};

export default Cars;