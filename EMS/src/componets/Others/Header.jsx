import React from 'react'

export default function Header({data, handleLogout}) {
  
 

  return (
    <div className='bg-[#272727] py-6 px-5 flex items-end justify-between'>
        <h2 className='text-3xl font-semibold'>
            Hello, <br /> <span className='font-bold text-4xl'>{data.name}👋</span>
        </h2>
        <button className='bg-red-700 rounded-md text-lg py-2 px-8' onClick={handleLogout}>Log Out</button>
    </div>
  )
}
