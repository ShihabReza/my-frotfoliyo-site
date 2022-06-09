import React from 'react';

const Letes = () => {
    return (
        <div className="mt-60 ">
            <h1 className='text-2xl text-center font-bold font-mono mb-28'>Latest News</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 justify-items-center mt-14 mt-10 transition duration-150 ease-out hover:ease-in">
            <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-black hover:text-white transition duration-150 ease-out hover:ease-in">
                <figure><img src="https://burst.shopifycdn.com/photos/hands-typing-code-on-laptop.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">thumbDevelopers watch out for these burnout symptoms</h2>
                    <p>BY ALEX WATSON 20 MAY 2020</p>
                   
                </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-black hover:text-white ease-in-out duration-300">
                <figure><img src="https://burst.shopifycdn.com/photos/coding-on-laptop.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">thumbDevelopers watch out for these burnout symptoms</h2>
                    <p>BY ALEX WATSON 20 MAY 2020</p>
                   
                </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl hover:bg-black hover:text-white ease-in-out duration-300">
                <figure><img src="https://burst.shopifycdn.com/photos/software-programming-plan.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">thumbDevelopers watch out for these burnout symptoms</h2>
                    <p>BY ALEX WATSON 20 MAY 2020</p>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default Letes;