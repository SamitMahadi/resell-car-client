import React, { useEffect, useState } from 'react';
import Car from './Car';
import { useQuery } from "@tanstack/react-query";

import BookingModal from '../BookingModal/BookingModal';

const Cars = () => {
    // const [cars, setCars] = useState([])
    const [car, setCar] = useState(null);

    const { data: cars = [] ,refetch,isLoading} = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('https://resell-car-server.vercel.app/cars')
            .then(res => res.json())
    })

    if(isLoading){
        return <p>Loading.......</p>
    }

    // useEffect(() => {
    //     fetch('https://resell-car-server.vercel.app/cars')
    //         .then(res => res.json())
    //         .then(data => setCars(data))
    // }, [])
    return (
        <div className='mt-16 mb-16 mx-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cars.map(car => <Car
                    key={car._id}
                    car={car}
                    AllCategory={car}
                    setCar={setCar}
                ></Car>)
            }
            {
                car &&
                <BookingModal
                    car={car}
                    setCar={setCar}
                    refetch={refetch}
                ></BookingModal>
            }

        </div>
    );
};

export default Cars;