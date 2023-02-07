import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white flex flex-col font-sans min-h-96 bg-gray-50 lg:pt-1 lg:pb-20 lg:bg-hero lg:bg-cover' >
      <div className='max-w-[1305px] mt-[-120px] w-full h-screen mx-auto text-center flex flex-col justify-center items-start'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Delivered anywhere
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-2 uppercase'>
            Fast, reliable, we delivery by
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#4ED02B]'
            strings={['AIR', 'SEA', 'LAND']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className='bg-[#4ED02B] w-[200px] rounded-md font-medium my-6 py-3'>Discover the Upside</button>
      </div>
    </div>
  );
};

export default Hero;