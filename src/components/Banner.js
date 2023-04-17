import React from 'react';
import Image from '../assets/teste.jpeg';
//icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// type of animation
import { TypeAnimation } from 'react-type-animation';
//motion
//import { motion } from 'framer-motion';
//variants
//import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text*/}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Lucas <span>Gualberto</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase lead-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000,
                  'Physics and math teacher',
                  2000,
                  'academic Researcher',
                  2000,                
                ]}
                speed={50}
                className='text-accent' 
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text 
                 ever since the 1500. 
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='https://github.com/Lucas-Gualberto94' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://github.com/Lucas-Gualberto94'>
                <FaGithub />
              </a>
              <a href='https://www.linkedin.com/in/lucas-gualberto-543a07272/'>
                <FaLinkedin />
              </a>
              <a href='https://www.instagram.com/lucas__gualberto/'>
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* image*/}
          <div>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
