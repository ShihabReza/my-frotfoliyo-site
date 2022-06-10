import React from 'react';
import pix from '../../img/parts.PNG'
import house from '../../img/werehouse.PNG'
import pic from '../../img/studio.PNG'
import Detail from '../Detail/Detail';


const Detals = () => {
    const detals = [
        {
            _id:1,
            img: pix ,
            name: 'Pix-Parts',
            datls1:'react router use this project',
            datls2:'react firebase hooks use this project',
            datls3:'react talwindcss use this project',
            datls4:'firebase use this project',
            datls5:'google singin use this project',
            datls6:'Find out about the price of the photo package',
            datls7:'use node',
            datls8:'use mongodb',
            link:'https://pix-parts.web.app/',
            link2:'https://github.com/ShihabReza/pix-parts',
            link3:'https://github.com/ShihabReza/pix-parts-server',
        },
        {
            _id:2,
            img: house,
            name: 'Warehouse-management',
            datls1:'react router use this project',
            datls2:'react firebase hooks use this project',
            datls4:'react bootstrap use this project',
            datls5:'firebase use this project',
            datls6:'google singin use this project',
            datls7:'use node and mongo db',
            datls8:'Email can be submitted',
            link:'https://electronic-warehouse.web.app/',
            link2:'https://github.com/ShihabReza/client-werehouse',
            link3:'https://github.com/ShihabReza/node-werehouse',

        },
        {
            _id:3,
            img:pic,
            name: 'Service Provide',
            datls1:'You will find it in different photo packages',
            datls2:'Details about photos can be crowded',
            datls3:'Email can be submitted',
            datls4:'The password can be reset',
            datls5:'react router use this project',
            datls6:'react firebase hooks use this project',
            link:'https://photo-graphi-9e3aa.web.app/',
            link2:'https://github.com/ShihabReza/photography',
            
        },
       
    ]
  
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10'>My Project</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 justify-items-center mt-14'>
           {
                detals.map(detail=><Detail key={detail._id} detail={detail}></Detail>)
            }
           </div>
        </div>
    );
};

export default Detals;