import React from 'react'

export default function Button({children,style}) {
  return (
    <button className={`${style} rounded-full font-medium hover:border-1 hover:border-[#0078FF] hover:text-[#0078FF] cursor-pointer `}>
        {children}
    </button>
  )
}
