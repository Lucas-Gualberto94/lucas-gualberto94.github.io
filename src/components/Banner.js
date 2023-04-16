import React from 'react';
import Image from '../assets/teste.jpg';
//icons
///import { FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';
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
        <div>
          {/* text*/}
          <div>
            <h1>
              Lucas <span>Gualberto</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px]'>
              <span className='mr-4'>I am a</span>
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
