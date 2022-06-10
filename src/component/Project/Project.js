import React from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => {
    const {img,name,datls1,datls2,datls3,link} = props.project
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{datls1}</p>
    <p>{datls2}</p>
    <p>{datls3}</p>
    <Link className='text-xl font-bold' to='/detals'>Se More...</Link>
    <a href={link}><button class="btn btn-outline w-full">Demo</button></a>
    
  </div>
</div>
    );
};

export default Project;