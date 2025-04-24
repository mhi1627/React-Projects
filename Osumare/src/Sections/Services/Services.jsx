import React from 'react'
import ServicesCard from '../../Components/ServicesCard/ServicesCard'
import SectionHeader from '../../Components/SectionHeader/SectionHeader'
import Button from '../../Components/Button/Button'

export default function Services() {
  return (
<div className='services w-full bg-[#F9F9F9] flex flex-col items-center justify-evenly py-4 sm:mt-25  mt-7 sm:pb-20 pb-10'>
    <SectionHeader header={`Our Service Offerings`} subHeader={` Strategies that Drive Property Market Excellence`}></SectionHeader>
<div className='flex p-5 gap-5 flex-wrap items-center justify-between sm:items-center sm:justify-evenly sm:mt-5'>
    <ServicesCard heading={'Automotive SEO'} description={'Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today'} iconUrl={`src/assets/Icons/Seo.png`}></ServicesCard>
    <ServicesCard heading={'PPC Precision'} description={'Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.'} iconUrl={'src/assets/Icons/ppc.png'}></ServicesCard>
    <ServicesCard heading={'Social Acceleration'} description={`Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.`} iconUrl={'src/assets/Icons/social.png'} ></ServicesCard>
    <ServicesCard heading={'Content Excellence'} description={'Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.'} iconUrl={'src/assets/Icons/content.png'}></ServicesCard>
    <ServicesCard heading={'Web Design'} description={'Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.'} iconUrl={'src/assets/Icons/web design.png'}></ServicesCard>
    <ServicesCard heading={'Data-Driven Insights'} description={'Leverage data to refine your strategies, making informed decisions that drive revenue growth.'} iconUrl={'src/assets/Icons/data driven.png'}></ServicesCard>
    <ServicesCard heading={'End-to-End Solutions'} description={'From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.'} iconUrl={'src/assets/Icons/solutions.png'}></ServicesCard>
    <ServicesCard heading={'Video marketing'} description={'Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.'} iconUrl={'src/assets/Icons/video.png'}></ServicesCard>
    </div>
    <Button style={`bg-[#0078FF] h-8 sm:h-12 lg:py-3 w-1/2 sm:w-1/4 text-white hover:bg-transparent mt-4`}>Get Started</Button>
</div>
  )
}
