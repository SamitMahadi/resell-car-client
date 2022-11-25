import React from 'react';
import Hero from '../Hero/Hero';
import Brands from '../Service/Brands';
import CarTypes from '../CarType/CarTypes';
import WhyChooseUs from '../Whychooseus/WhyChooseUs';
import Category from '../../Cars/Category/Category';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <CarTypes></CarTypes>
            <Brands></Brands>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;