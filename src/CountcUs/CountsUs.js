import React,  { useRef } from 'react';


import emailjs from '@emailjs/browser';

const CountsUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y3l8u0y', 'template_cizvhrt', form.current, 'wfgd22aVoSGy7sSJz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="w-80 mx-auto mt-36 mb-20">
      <h1 className="text-2xl text-center font-bold">Counts Us</h1>
      <form ref={form} onSubmit={sendEmail}>
          <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
            
          </label>
          <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
          
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
            
          </label>
          <input type="email" name='user_email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
          
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text ">Massage</span>
            
          </label>
          <textarea type="message" name='message' placeholder="massage" class="input input-bordered w-full max-w-xs" />
          
        </div><br />
            
            <button class="btn btn-outline w-full"><input type="submit" value="Send" require/></button>
       </form>
    </div>
  );
};

export default CountsUs;