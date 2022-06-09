import React from 'react';

import resume from '../../resume/Resume (3).pdf'
import ReactTypingEffect from 'react-typing-effect';


const Baner = () => {
 
    return (
      
        <div class="hero min-h-screen" style={{backgroundImage: 
          
            "url('https://burst.shopifycdn.com/photos/bearded-young-man.jpg?width=925&format=pjpg&exif=1&iptc=1')",}} >
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