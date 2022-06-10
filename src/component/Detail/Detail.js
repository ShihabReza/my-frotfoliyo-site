import React from 'react';

const Detail = ({detail}) => {
    const {img,name,datls1,datls2,datls3,datls4,datls5,datls6,datls7,datls8,link,link2,link3} = detail;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{datls1}</p>
                <p>{datls2}</p>
                <p>{datls3}</p>
                <p>{datls4}</p>
                <p>{datls5}</p>
                <p>{datls6}</p>
                <p>{datls7}</p>
                <p>{datls8}</p>
                <div class="card-actions justify-between mt-3">
                <a href={link2}><button class="btn btn-outline w-50">Client</button></a>
                <a href={link3}><button class="btn btn-outline w-50">Server</button></a>
                </div>
                <a href={link}><button class="btn btn-outline w-full mt-5">DEMO</button></a>
            </div>
            </div>
    );
};

export default Detail;