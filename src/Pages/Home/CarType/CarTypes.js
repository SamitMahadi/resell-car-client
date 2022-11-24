import React from 'react';
import CarType from './CarType';

const CarTypes = () => {
    const carData=
    [
        {
            id: 1,
            img: 'https://autohive-html.themetags.com/assets/img/icons/crossover-red.svg',
            name:'Crossover'
        },
        {
            id: 2,
            img: 'https://autohive-html.themetags.com/assets/img/icons/suv-red.svg',
            name:'Suv'
        },
        {
            id: 3,
            img: 'https://autohive-html.themetags.com/assets/img/icons/sedan-red.svg',
            name:'Sedan'
        },
        {
            id: 4,
            img: 'https://autohive-html.themetags.com/assets/img/icons/wagon-red.svg',
            name:'Waegon'
        },
        {
            id: 5,
            img: 'https://autohive-html.themetags.com/assets/img/icons/coup-red.svg',
            name:'Coup'
        },
        {
            id: 6,
            img: 'https://autohive-html.themetags.com/assets/img/icons/convertible-red.svg',
            name:'Convertible'
        },
        {
            id: 7,
            img: 'https://autohive-html.themetags.com/assets/img/icons/compact-red.svg',
            name:'Compact'
        },
        {
            id: 8,
            img: 'https://autohive-html.themetags.com/assets/img/icons/sport-coupe-red.svg',
            name:'Sport Coupe'
        },
      
    ]


    return (
        <div>
              <h1 className='text-5xl text-red-700 text-center mt-12 font-bold'> Brands With Body Types</h1>
            
            <div className='mt-8 grid  gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 content-center place-items-center'>
                {
                    carData.map(card => <CarType
                        key={card.id}
                        card={card}
                    ></CarType>)
                }
            </div>
        </div>
    );
};

export default CarTypes;