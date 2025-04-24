

import React from 'react'

export default function ExpertiseCard({expertiseIcon,expertiseHeading,expertiseDescription}) {
  return (
    <div className='p-2 rounded-xl flex flex-col gap-3 items-center shadow-2xl sm:p-6 sm:w-[70%] sm:h-[100%] sm:overflow-hidden '>
        <div className='w-20 h-20 bg-[#f9f9f9] rounded-full p-3'>
            <img src={expertiseIcon} alt="" />
        </div>
        <h3 className='text-xl text-center'>{expertiseHeading}</h3>
        <p className='text-md text-center'>{expertiseDescription}</p>
    </div>
  )
}
