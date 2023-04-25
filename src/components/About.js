import React from 'react';
import image1 from '../assets/teacher.jpeg';
//Countup
import CountUp from 'react-countup';
//intersection obsorver hooker
import { useInView } from 'react-intersection-observer';
//motion
//import { motion } from 'framer-motion';
//variant
//import { fadeIn} from '../variants'; 


const About = () => {
   const [ref, inView] = useInView({
    threshold: 0.5,
   }); 

  return (
    <section className='section' id='about' ref={ref} >
      <div className='container mx-auto'>
        <h2 className='h2 text-accent items-center'>About me</h2>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='lg:flex flex-1 max-w-[300px] lg:max-w-[450px] mx-auto mb-6'>
            <img src={image1} alt=''></img>
          </div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
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
            <p className='p-8 border-2 border-white/50 rounded-x1'>I am a front-end developer with master's degree in Physics from the Inter-unit 
              Science Teaching Program at University of São Paulo (PIEC- USP). A fast learner with
              good communication skills. My current passion is to develop websites and pages.
              My journey in programmation started when I did technical course of mechatronics in
              National Service for Industrial Learning (SENAI). There I had contact with C, C++, 
              Assembly and CLP. In my master I worked with data analysis using R language. Nowaday 
              I´ve studied JavaScript using React as a framework.    
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
