import React from 'react';

const Blogs = () => {
    return (
        <div>
            <p className='text-6xl font-bold text-red-700 mt-5 mb-5 text-center'>Blogs</p>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    1.What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <ul className='text-xl'>
                        <li>Server state or API data</li>
                        <li>Form data or user entry data</li>
                        <li>Navigation state</li>
                        <li>Components state</li>
                    </ul>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    2.How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    3.What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                <div className="collapse-title text-4xl font-medium">
                    4.React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p className='text-xl'>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                        React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                        They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                        Each framework is component-based and allows the rapid creation of UI features.

                        However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;