import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CardCategory from './CardCategory';

const Category = () => {
    const [carsCategory, setCarsCategory] = useState([])


    useEffect(() => {
        fetch('https://resell-car-server.vercel.app/car-categories')
            .then(res => res.json())
            .then(data => setCarsCategory(data))
    }, [])



    return (
        <div>
            <h1 className='text-5xl text-red-700 text-center mt-12 font-bold'>Our Category</h1>
            <div className='mt-16 mb-16 mx-8 grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center'>
                {
                    carsCategory.map(category => <Link to={`category/${category.id}`}>
                        <CardCategory
                            key={category.id}
                            category={category}
                        ></CardCategory>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Category;