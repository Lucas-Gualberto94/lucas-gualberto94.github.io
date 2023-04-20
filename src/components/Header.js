import React from 'react';
//images
import logo4 from '../assets/logo4.png';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
            <img src={logo4} alt='' />
          <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>
  );
};

export default Header;
