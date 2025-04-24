import React from 'react'

export default function InsightsCard({insightIcon,insighTHeading,insightDescription}) {
  return (
    <div className='flex flex-col items-center p-6 rounded-xl bg-[#ffffff] sm:flex-row sm:p-12 lg:p-4 gap-5 shadow-2xl xl:p-7 '>
        <div className='sm:w-1/6 flex items-center justify-center'>
              <div className='w-20 h-20 p-2 flex items-center justify-center sm:w-16 sm:h-16 lg:w-12 lg:h-12 bg-[#f5f5f5] rounded-full'>
              <img src={insightIcon} alt="" className=''/>
              </div>
        </div>
        <div className='5/6'> 
            <h3 className='text-lg sm:text-2xl  lg:text-lg text-center lg:text-left font-bold'>{insighTHeading}</h3>
            <p className='text-center lg:text-left sm:text-lg lg:text-xs'>{insightDescription}</p>
        </div>
    </div>
  )
}
 