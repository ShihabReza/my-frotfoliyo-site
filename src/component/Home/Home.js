import React from 'react';

import CountsUs from '../../CountcUs/CountsUs';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Letes from '../Letas/Letes';

import Protfoliyo from '../Protfoliyo/Protfoliyo';
import Revews from '../Revews/Revews';


import Baner from './Baner';

const Home = () => {
    return (
        <div>
            
            <Baner></Baner>
            <About></About>
            <Protfoliyo></Protfoliyo>
            <Letes></Letes>
            <CountsUs></CountsUs>
            <Revews></Revews>
            <Footer></Footer>
        </div>
    );
};

export default Home;