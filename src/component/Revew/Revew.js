import React from 'react';

const Revew = ({review}) => {
    const {img,name,revew,reting} = review
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl text-center mb-10 pb-5 mt-20">
  <figure><img style={{width:'80px', marginTop:'20px'}} src={img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title mx-auto">{name}</h2>
    <p>{revew}</p>
    <p>{reting}</p>
    
  </div>
  <div class="rating mx-auto">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
</div>
    );
};

export default Revew;