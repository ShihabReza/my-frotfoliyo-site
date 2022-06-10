import React from 'react';
import firstImg from '../../img/Ellipse 90.png'
import seondImg from '../../img/Ellipse 91.png'
import therdImg from '../../img/Ellipse 92.png'
import Revew from '../Revew/Revew';

const Revews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Nash Patrik',
            img: firstImg,
            revew:'New Air Force white shoes I bought for my son unraveled after about 2 months. Very bad shoes. I went to and pics and the customer sevice',
            reting:5,

        },
        {
            _id: 2,
            name: 'Miriam Barron',
            img: seondImg,
            revew:'New Air Force white shoes I bought for my son unraveled after about 2 months. Very bad shoes. I went to and pics and the customer sevice',
            reting:5,

        },
        {
            _id: 3,
            name: 'Bria Malone',
            img: therdImg,
            revew:'New Air Force white shoes I bought for my son unraveled after about 2 months. Very bad shoes. I went to and pics and the customer sevice',
            reting:2,

        },
    ]
    return (
        <div>
        <h1 className='text-4xl text-center font-bold mt-32'>REVEW</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-items-center mt-28 bg-red-50">
            {
                reviews.map(review=><Revew key={review._id} review={review}></Revew>)
            }
        </div>
    </div>
    );
};

export default Revews;