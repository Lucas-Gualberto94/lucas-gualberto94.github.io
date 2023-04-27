import React from 'react';
import Image from '../assets/logo.png';
//icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// type of animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-3 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Lucas <span>Gualberto</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='mb-2 text-[36px] sm:text-[40px] font-secondary
              font-semibold uppercase lead-[1]'>
              <span className='text-white mr-4'>I am</span>
              <TypeAnimation 
                sequence={[
                  'a Developer',
                  2000,
                  'a Physics and math teacher',
                  2000,
                  'an exchange student',
                  2000,
                  'an academic Researcher',
                  2000          
                ]}
                speed={50}
                className='text-accent' 
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='mb-2 max-w-lg mx-auto lg:mx-0'>
              This page is my portfolio to promote my work on programming, science, 
              academic research and education. 
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial="hidden" 
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}} 
              className='flex max-w-max gap-x-6 items-center mb-2 mx-auto lg:mx-0'>
              <button className='btn btn-sm'>Contact me</button>
              <a href='https://github.com/Lucas-Gualberto94' className='text-gradient btn-link'>
                My Portfolio
              </a>
              <a href='https://github.com/Lucas-Gualberto94'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/lucas-gualberto-543a07272/'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/lucas__gualberto/'>
                <FaInstagram />
              </a>
            </motion.div>
            
          </div>
          {/* image*/}
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial="hidden" 
            whileInView={'show'} 
            className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[450px] mx-auto'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
