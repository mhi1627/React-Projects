import React from 'react'
import Button from '../../Components/Button/Button'
export default function NavBar() {
  return (
    <div className='w-full h-30 flex justify-between items-center px-2 sm:px-10'>
     <img src="src\assets\osumare_logo.png" alt="" className='w-27 sm:w-40'/>
     <Button style={`w-25 h-8 sm:w-52 sm:h-10 sm:font-bold text-sm border-1  hover:border-1-black `}>Contact Us</Button>
    </div>
  )
}
