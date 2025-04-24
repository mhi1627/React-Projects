

import React, { useState } from 'react'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'

const FAQsData = [
  {
    queNo : '1. ',
    question:' How does Osumare measure campaign success?',
    answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, beatae.`,
    isActive:false
  },
  {
    queNo : '2. ',
    question:' How does Osumare measure campaign success?',
    answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, beatae.`,
    isActive:false
  },
  {
    queNo : '3. ',
    question:' How does Osumare measure campaign success?',
    answer: `We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.`,
    isActive:false
  },
]

export default function Faq() {
  return (
    <div className='sm:flex sm:flex-col sm:items-center pb-5 mb-10 sm:gap-10 sm:px-10 mt-10'>
      <div className='sm:px-30 px-10 '>
        <SectionHeader header={`Frequently Asked Questions`} subHeader={`Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.`}></SectionHeader>
      </div>
      <div className=' sm:w-[65%] sm:py-10 shadow-2xl inset-shadow-2xs rounded-lg mt-10'>
       {FAQsData.map(faq=>(
         <Accordion queNo={faq.queNo} question={faq.question} isActive={faq.isActive} answer={faq.answer}></Accordion>
       ))}
      </div>
    </div>
  )
}

function Accordion({queNo,question,isActive,answer}){
  const [collapse,setCollapse] = useState(isActive);

  function handleClick() {
 
    if(collapse){
      setCollapse(false)
    }
    else {
      setCollapse(true)
    }
  }
  return (
   <div>
    <div onClick={handleClick}  className={collapse ? 'bg-[#0078FF] flex  sm:text-xl sm:gap-3 justify-between sm:p-6 text-white  text-md p-3' : 'flex sm:p-3 sm:text-xl sm:gap-3 justify-between sm:py-5 p-3 text-md'}>
    <div className='sm:flex'>
    <h4 className='hidden sm:block'>{queNo}</h4>
    <h3 className=''>{question}</h3>
    </div>
      <button  className='cursor-pointer'><img src="src\assets\Icons\i.fa-solid.png" alt="" /></button>
    </div>
    {collapse ? <div className=' sm:p-5 sm:text-lg text-[#706F7B] p-3 text-sm'>{answer}</div>:''}
   </div>

  )
}