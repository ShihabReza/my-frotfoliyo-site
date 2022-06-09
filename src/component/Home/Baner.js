import React from 'react';
import resume from '../../resume/Resume (3).pdf'
import ReactTypingEffect from 'react-typing-effect';

const Baner = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: 
            "url('https://img.freepik.com/free-photo/male-beauty-concept-portrait-fashionable-young-man-with-stylish-haircut-wearing-trendy-suit-posing-black-studio-background_155003-21656.jpg?t=st=1654713174~exp=1654713774~hmac=14e55fefc51edc674ed9ff23fe52852265527bddffc8e6752b39e638986a86ba&w=1060')",}} >
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
    <ReactTypingEffect style={{color: '#FFF', fontSize:'40px',fontFamily:'Poppins'}}
        text={["I AM SHIHAB", "I AM A FRONT END DEVELOPER","I AM A CODER" ]}
      />
      <br /><br /><br />
      <a href={resume} download={resume}><button class="btn btn-outline text-white">Download Resume</button></a>
     
    </div>
  </div>
</div>
    );
};

export default Baner;