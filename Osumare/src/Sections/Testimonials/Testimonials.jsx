

import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import TestmonialCard from '../../Components/TestimonialCard/TestimonialCard'

const feedbacksData = [
  {name:'Mahesh Deshmukh',
   profileUrl:'src/assets/DSC_9479.JPG',
   videoUrl:'src/assets/DSC_9479.JPG',
   feedback:`Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.`
  },
 
]
export default function Testimonials() {
  return (
   <>
    <div className='h-screen relative flex flex-col items-center -mt-20 '>
        <div className=' h-full sm:absolute sm:-top-20 text-center flex flex-col items-center justify-center  '>
        <SectionHeader header={`What Our Pharma Partners Say`} subHeader={`Driving Transformations, One Brand at a Time`}></SectionHeader> 
        {feedbacksData.map(feed=>(
            <TestmonialCard userName={feed.name} userProfile={feed.profileUrl} userVideo={feed.videoUrl} userFeedback={feed.feedback}></TestmonialCard>
        ))}
         </div>       
         <div className='-mt-5 flex justify-center gap-10 sm:relative sm:top-170 p-2'>
     <button className='w-10 h-10 rounded-full border-1 border-[#0078FF] cursor-pointer'>{
        <img src="src/assets/Icons/eva_arrow-back-fill.png" alt="" />
        }</button>
     <button className='w-10 h-10 rounded-full border-1 border-[#0078FF] cursor-pointer'>{
        <img src="src/assets/Icons/eva_arrow-back-fill.png" alt=""  className='transform-view'/>
        }</button>
     </div> 
    </div>
    
   </>
  )
}
