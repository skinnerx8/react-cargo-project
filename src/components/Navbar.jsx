import React from 'react'
import myLogo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='bg-[#173448] flex justify-between items-center h-24 mx-auto px-4 text-white sticky top-0'>
    <img className='ml-20 w-16 h-16 fill-current' src={myLogo} alt="SVG logo image"/>
      <h1 className='w-full text-4xl font-bold text-[#4ED02B]'>KARGO</h1>
      <ul className='hidden md:flex pr-12 text-lg'>
        <button className='p-4 hover:bg-[#4ED02B] rounded-md'>Home</button>
        <button className='p-4 hover:bg-[#4ED02B] rounded-md'>Company</button>
        <button className='p-4 hover:bg-[#4ED02B] rounded-md'>About</button>
        <button className='p-4 hover:bg-[#4ED02B] box-border rounded-l-md border-r-4'>Contact</button>
      </ul>
    </div>
  )
}

export default Navbar

