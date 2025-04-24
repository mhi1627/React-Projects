

import React from 'react'

export default function TestimonialCard({userProfile,userName,userVideo,userFeedback}) {
  return (
    <div className='w-[80%] h-[75%] p-3 flex flex-col gap-10 items-center sm:flex-row  shrink-0 justify-center sm:mt-10 sm:rounded-2xl shadow-2xl sm:px-10 overflow-hidden'>
       <div className='w-[80%] h-[50%] sm:h-[80%] sm:w-[50%] bg-sky-100 rounded-2xl '>
            <img src={userVideo} className='w-[100%] h-[100%] object-cover bg-center rounded-2xl'></img>
        </div>

     <div className='w-[100%] sm:w-[40%] h-full flex flex-col gap-5 justify-center '>
     <div className=' w-full flex items-center gap-3 '>
           <div className='w-22 h-22 bg-slate-300 rounded-full'>
           <img src={userProfile} alt="" className='w-[100%] h-[100%] object-cover overflow-hidden rounded-full'/>
           </div>
            <h3 className=' text:lg sm:text-xl font-black'>{userName}</h3>
        </div>
       
        <div className='text-sm w-full '>
            <p className='text-md sm:text-xl text-left w-[100%] sm:w-[80%]'>{userFeedback}</p>
        </div>
        </div>
    </div>
  )
}
