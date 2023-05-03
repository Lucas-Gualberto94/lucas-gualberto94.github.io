import React from 'react';
import image1 from '../assets/teacher.jpeg';
//Countup
import CountUp from 'react-countup';
//intersection obsorver hooker
import { useInView } from 'react-intersection-observer';

const About = () => {
   const [ref, inView] = useInView({
    threshold: 0.5,
   }); 

  return (
    <section className='section h-screen' id='about' ref={ref} >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-20 
        lg:gap-y-0 h-screen'>
          <div className='lg:flex flex-1 max-w-[300px] lg:max-w-[450px] mx-auto'>
            <img src={image1} alt=''></img>
          </div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <h2 className='h2 text-accent items-center'>About me</h2>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3}/> : 
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience <br/>
                  in Education
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3}/> : 
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Experience of <br/>
                  programming
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={3}/> : 
                  null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/>
                  Exchange <br/>
                  student
                </div>
              </div>
            </div>
            <p className='p-4 border-2 border-white/50 rounded-x1'>I am a front-end developer with 
              <b>master's degree</b> in Physics from the Inter-unit 
              Science Teaching Program at University of São Paulo (PIEC- USP). A fast learner with
              good communication skills. My current passion is to develop websites and pages.
              I had contact with C, C++, Assembly and CLP in SENAI. In my master I worked with data analysis
              using R language. Nowaday I´ve studied JavaScript using React as a framework.    
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
