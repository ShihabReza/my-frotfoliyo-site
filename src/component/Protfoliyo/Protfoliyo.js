import React from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';

const Protfoliyo = () => {
    return (
        <div className='flex justify-center items-center justify-evenly'>
            <div>
            <Iframe url="https://pix-parts.web.app/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </div>
            <div>
            <Iframe url="https://electronic-warehouse.web.app/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </div>
            <div>
            <Iframe url="https://photo-graphi-9e3aa.web.app/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </div>
        </div>
    );
};

export default Protfoliyo;