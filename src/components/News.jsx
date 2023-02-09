import React from 'react';
import Tracking from './Tracking';

const News = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Shipment & Container Tracking
          </h1>
          <p>Select your booking type from Ocean, Air or Less-than-container-load (LCL) and enter your tracking number</p>
        </div>
        <Tracking/>
      </div>
    </div>
  );
};

export default News;