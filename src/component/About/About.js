import React from 'react';
import resume from '../../resume/Resume (3).pdf'

const About = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src="http://shanereact.ibthemespro.com/img/about/1.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Creative Independent Web Developer based in USA</h1>
      <p class="py-6">I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.

</p>
<a href={resume} download={resume}><button class="btn btn-outline text-accent">Download Resume</button></a>
    </div>
  </div>
</div>
    );
};

export default About;