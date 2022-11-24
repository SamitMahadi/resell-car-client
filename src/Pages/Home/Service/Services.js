import React from 'react';
import Service from './Service';

const Services = () => {
    const cardData = [
        {
            id: 1,
            img: 'https://autohive-html.themetags.com/assets/img/brands/hyundai-lg.png'
        },
        {
            id: 2,
            img: 'https://autohive-html.themetags.com/assets/img/brands/audi-lg.png'
        },
        {
            id: 3,
            img: 'https://autohive-html.themetags.com/assets/img/brands/ferrari-lg.png'
        },
        {
            id: 4,
            img: 'https://autohive-html.themetags.com/assets/img/brands/mahindra-lg.png'
        },
        {
            id: 5,
            img: 'https://autohive-html.themetags.com/assets/img/brands/toyota-lg.png'
        },
        {
            id: 6,
            img: 'https://autohive-html.themetags.com/assets/img/brands/mitsubishi-lg.png'
        },
        {
            id: 7,
            img: 'https://autohive-html.themetags.com/assets/img/brands/volkswagen.png'
        },
        {
            id: 8,
            img: 'https://autohive-html.themetags.com/assets/img/brands/mercedes-lg.png'
        },
    ]
    return (
        <div>
            <h1 className='text-5xl text-red-700 text-center my-5 font-bold'>Best Selling Brands</h1>
            
            <div className='mt-8 grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-center place-items-center'>
                {
                    cardData.map(card => <Service
                        key={card.id}
                        card={card}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;