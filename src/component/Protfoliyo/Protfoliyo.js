import React from 'react';
import { Link } from 'react-router-dom';
import pix from '../../img/pix-part.PNG'
import house from '../../img/werehouse.PNG'
import pic from '../../img/photo-graphy.PNG'
import Project from '../Project/Project';

const Protfoliyo = () => {
    const projects = [
        {
            _id:1,
            img: pix ,
            name: 'Pix-Parts',
            datls1:'This website is made with node js',
            datls2:'This website has an email password login system and social loginsystem',
            datls3:'This website has a system to add reviews and place orders',
            link:'https://pix-parts.web.app/'
        },
        {
            _id:2,
            img: house,
            name: 'Warehouse-management',
            datls1:'Details about photos can be crowded',
            datls2:'use node and mongo db',
            datls3:'Email can be submitted',
            link:'https://electronic-warehouse.web.app/'
        },
        {
            _id:3,
            img:pic,
            name: 'Service Provide',
            datls1:'You will find it in different photo packages',
            datls2:'This website has an email password login system and social loginsystem',
            datls3:'This website has a system to add reviews and place orders',
            link:'https://photo-graphi-9e3aa.web.app/'
        },
       
    ]
  
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10'>My Project</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 justify-items-center mt-14'>
           {
                projects.map(project=><Project key={project._id} project={project}></Project>)
            }
           </div>
        </div>
    );
};

export default Protfoliyo;