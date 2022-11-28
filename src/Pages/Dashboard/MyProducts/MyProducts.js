import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const MyProducts = () => {
    const [car, setCar] = useState(null);

    const { data: cars = [] ,refetch,isLoading} = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('https://resell-car-server.vercel.app/cars')
            .then(res => res.json())
    })
    if(isLoading){
        return <p>Loading.......</p>
    }
    return (
        
<div>
            <h3 className="text-4xl p-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cars?.map((car, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={car.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{car.carName}</td>
                                <td>{car.price}</td>
                               
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
        
    );
};

export default MyProducts;