import React from 'react'
import './hero.css'
import Button from '../../Components/Button/Button'
export default function Hero() {
  return (
   <div className='flex flex-col items-center'>
     <div className='hero flex items-center justify-center z-9'>
      <div className='heroHeader sm:flex sm:flex-col sm:justify-center sm:items-center'>
        <h1 className='text-3xl/10 -mt-60 text-left sm:text-5xl/15 font-medium sm:text-center'>Elevate <span className='text-[#0078FF] font-black'>Real Estate Succuss</span> with <br /> Osumare's Digital Expertise</h1>
        <h5 className='sm:text-center text-lg font-medium mt-3'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</h5>
        <Button style={` sm:w-1/2 px-3 py-2 mt-5 w-full bg-[#0078FF] text-white hover:bg-transparent`}>Get Started</Button>
      </div>
    </div>
    <img src="src\assets\Header image.png" alt="" className=' -mt-60 sm:-mt-64 '/>
   </div>
  )
}
