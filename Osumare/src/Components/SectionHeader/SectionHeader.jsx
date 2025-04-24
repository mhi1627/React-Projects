import React from 'react'

export default function SectionHeader({header,subHeader,subHeader2}) {
  return (
    <div className='text-center sm:mt-5'>
        <h3 className='text-2xl font-black sm:text-4xl'>{header}</h3>
        <h5 className='text-lg mt-2 sm:text-2xl'>{subHeader}</h5>
        <h5 className='text-lg mt-2 sm:text-2xl'>{subHeader2}</h5>
    </div>
  )
}
