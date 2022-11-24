import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-hero">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 text-8xl font-bold text-red-700">Sell Your Old Car & Buy your Dream Car</h1>
                    <p className="mb-5">Find the largest collection of verified second hands cars for sale in your city with photos & prices. Find used car valuation & sell your old car at Carzone.Huge range of used cars from trusted dealers. Finance options available. Free breakdown cover and history check on all vehicles.</p>
                    <button className="btn  bg-red-700">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;