import React from 'react';
import resume from '../../resume/Resume (3).pdf'

const About = () => {
    return (
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src="http://shanereact.ibthemespro.com/img/about/1.jpg" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Creative Independent Web Developer based in USA</h1>
      <p class="py-6">I am Shihab I am a student I am studying and learning font and development and work I want to work as a font and developer accountant in the future. I'm a very detail-oriented person and am also hardworking and responsible especially with deadlines.

</p>
<a href={resume} download={resume}><button class="btn btn-outline text-accent">Download Resume</button></a>
    </div>
  </div>
</div>
    );
};

export default About;