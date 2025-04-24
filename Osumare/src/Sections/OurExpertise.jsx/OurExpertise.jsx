

import React from 'react'
import ExpertiseCard from '../../Components/ExpertiseCard/ExpertiseCard'

const expertise = [
    {iconUrl:'src/assets/Icons/virtual_10569504 2.png',
     title:'Call-to-Action Optimization',
     descrption:'Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates.'
    },
    {iconUrl:'src/assets/Icons/mass_9984040 2.png',
     title:'Landing Page Efficiency',
     descrption:'Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission.'
    },
    {iconUrl:'src/assets/Icons/3d_9345318 2.png',
     title:'Social Proof Utilization',
     descrption:'Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action'
    },
    {iconUrl:'src/assets/Icons/augmented-reality_7065057 2.png',
     title:'Mobile-Friendly Experience',
     descrption:'With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers.'
    },
]
export default function OurExpertise() {
  return (
    <div className=' flex flex-col items-center sm:mt-30 mt-20 '>
        <h3 className='text-2xl text-center font-black sm:text-4xl sm'>Driving Property Inquiries to Conversions</h3>
      <div className='flex flex-col gap-10 items-center p-2 mt-16 sm:grid sm:grid-cols-2 sm:justify-evenly sm:items-center justify-items-center' >
      {expertise.map((expertise,index)=>(
        <ExpertiseCard key={index} expertiseIcon={expertise.iconUrl} expertiseHeading={expertise.title} expertiseDescription={expertise.descrption}></ExpertiseCard>
      ))}
      </div>
    </div>
  )
}
