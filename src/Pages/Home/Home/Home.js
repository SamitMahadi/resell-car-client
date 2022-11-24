import React from 'react';
import Hero from '../Hero/Hero';
import Brands from '../Service/Brands';
import CarTypes from '../CarType/CarTypes';
import WhyChooseUs from '../Whychooseus/WhyChooseUs';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Brands></Brands>
            <CarTypes></CarTypes>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;