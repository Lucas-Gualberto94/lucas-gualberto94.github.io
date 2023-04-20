import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      <h2 className='h2 leading-tight text-accent'>My recent projects</h5>
      
      <div className='container mx-auto'></div>
      <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'> 
        <article className='group relative overflow-hidden border -2 border-white/50 rounded-x1'>
          <div>
            <img src={img1} alt='' />
          </div>
          <h3>Calculator</h3>
          <a href='https://github.com/Lucas-Gualberto94/Calculator' className='btn'
          target='_blank'  rel="noreferrer">github</a>
          <a href='https://lucas-gualberto94.github.io/Calculator/' className='btn btn-primary'
          target='_blank'  rel="noreferrer">Live Demo</a>
        </article>
        <article>
          <div>
            <img src={img2} alt='' />
          </div>
          <h3>To do list</h3>
          <a href='https://github.com/Lucas-Gualberto94/Lista-de-tarefas' className='btn'
          target='_blank'  rel="noreferrer">github</a>
          <a href='https://lucas-gualberto94.github.io/Lista-de-tarefas/' className='btn btn-primary'
          target='_blank'  rel="noreferrer">Live Demo</a>
        </article>
      </div>
    </section>
  );
};

export default Work;
