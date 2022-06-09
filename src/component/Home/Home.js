import React from 'react';
import CountsUs from '../../CountcUs/CountsUs';
import About from '../About/About';
import Letes from '../Letas/Letes';

import Protfoliyo from '../Protfoliyo/Protfoliyo';

import Baner from './Baner';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <About></About>
            <Protfoliyo></Protfoliyo>
            <Letes></Letes>
            <CountsUs></CountsUs>
        </div>
    );
};

export default Home;