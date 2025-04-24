

import React from 'react'
import Button from '../../Components/Button/Button'

export default function Other() {
  return (
    <div className='w-full h-[60vh] sm:h-[100vh] relative sm:mt-25 overflow-hidden'>
     <div className='bgDiv w-full h-full  flex justify-between items-center overflow-hidden p-2'>
     <div className='blueRound w-[50%] h-[25%] sm:w-[18%] sm:h-[60%] bg-[#409AFF] rounded-full absolute -left-30 top-20 blur-3xl sm:blur-[8rem]  sm:-left-10 sm:top-35 opacity-70'></div>
     <div className='orangeRound w-[50%] h-[25%] sm:w-[18%] sm:h-[60%] bg-[#FF725E] rounded-full absolute blur-3xl sm:blur-[8rem] -right-30 top-20 sm:-right-10 sm:top-35 opacity-70 '></div>
     </div>
     <div className='upperDiv w-full  absolute top-10 flex flex-col items-center gap-5'>
        <h3 className='text-2xl font-black text-center mt-10 sm:text-4xl'>Your Peace of Mind</h3>
        <p className='text-md text-center sm:text-xl sm:w-2/6'>Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market
        </p>
        <Button style={`w-full h-9 bg-[#0078FF] text-white hover:bg-transparent sm:w-1/5 sm:h-12 cursor-pointer`}>Get Started</Button>
     </div>
    </div>
  )
}
 