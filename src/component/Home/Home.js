import React from 'react';
import About from '../About/About';
import Protfoliyo from '../Protfoliyo/Protfoliyo';
import Baner from './Baner';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <About></About>
            <Protfoliyo></Protfoliyo>
        </div>
    );
};

export default Home;