import React from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import Button from '../../Components/Button/Button'

export default function InquiryForm() {
  return (
 <div className='relative  flex sm:mt-25 justify-center overflow-hidden'>
    <div className='w-full h-screen relative mt-20'>
       <div className='blueRound w-[50%] h-[25%] sm:w-[18%] sm:h-[60%] bg-[#409AFF] rounded-full absolute -left-30 top-20 blur-3xl sm:blur-[8rem]  sm:-left-10 sm:top-20  opacity-60'></div>
       <div className='orangeRound w-[50%] h-[25%] sm:w-[18%] sm:h-[60%] bg-[#FF725E] rounded-full absolute blur-3xl sm:blur-[8rem] -right-30 top-20 sm:-right-10 sm:top-20 opacity-60'></div>
    </div>
    <div className='absolute top-0 sm:mt-5 w-3/4'>
    <SectionHeader header={`Connect with Our Digital Marketing Experts`} subHeader={`Reach Out for Tailored Strategies and Results-Driven Solutions.`} subHeader2={` Let's Elevate Your Online Presence Together`}></SectionHeader>

    <div className='w-full bg-white shadow-2xl p-3  rounded-2xl sm:mt-20 mt-10 py-6 sm:px-10'>
        <form action="" className=' w-full flex flex-col sm:flex-row sm:justify-between items-center '>
            <div className='sm:flex sm:flex-col sm:w-3/4 w-full'>
            <label htmlFor="name" className='font-black' >Name</label>
            <input type="text" name="name" id="" placeholder='Enter Your Name' className='bg-[#FCFCFC]  border-1 border-[#C7C7C7] p-2 px-3 sm:mt-3  sm:w-[80%] w-[90%] rounded-lg ' /><br />
            <label htmlFor="phone" className='font-black'>Phone</label> 
            <input type="tel" name="phone" id="" placeholder='Phone Number' className='bg-[#FCFCFC] border-1 border-[#C7C7C7] p-2 px-3 sm:mt-3 sm:w-[80%] w-[90%] rounded-lg'/><br />
            <label htmlFor="email" className='font-black'>Email</label> 
            <input type="email" placeholder='Email' className='bg-[#FCFCFC] border-1 border-[#C7C7C7] p-2 px-3 sm:mt-3  sm:w-[80%] w-[90%] rounded-lg ' />
            </div>
           <div className='sm:w-1/2 w-full flex flex-col justify-between'>
           <label htmlFor="message" className='font-black'>Message</label>
           <textarea name="message" id="message" placeholder='Your Message'  className='bg-[#FCFCFC] border-1  border-[#C7C7C7] p-1.5 px-3 sm:mt-3 sm:w-[100%] w-[90%] sm:h-[180px] rounded-lg'></textarea>
           <Button style={`sm:w-1/2 h-10 mt-5 bg-[#0078FF] text-white hover:bg-transparent`}>Contact Now</Button>
           </div>
        </form>
    </div>
    </div>
 </div>
  )
}
