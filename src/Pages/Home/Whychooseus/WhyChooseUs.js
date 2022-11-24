import React from 'react';
import why from '../../../Assets/why.jpg'

const WhyChooseUs = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content  flex-col lg:flex-row">
                <img src={why} className="lg:w-1/2 rounded-lg  "alt='' />
                <div className='pl-4'>
                    <h1 className='text-2xl text-red-700' >KNOW MORE ABOUT US</h1>
                    <h1 className="text-5xl font-bold">Why Choose Us</h1>
                    <p className="py-6 text-lg">Collaboratively leverage existing client-centric schemas integrated processes. Inter actively engineer global sources after team driven niche markets. Rapidiously processes with resource maximizing architectures.Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.</p>
                    <button className="btn  bg-red-700 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;