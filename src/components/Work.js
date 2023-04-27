import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';


const Work = () => {
  return (
    <section className='section' id='work'>
      
      <div>
      <h2 className='h2 leading-tight text-accent'>My recent projects</h2>
      </div>
      
      <div className='container grid grid-cols-1 md:grid-cols-3 gap-2'>
        <article>
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
        <article>
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
        <article>
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
