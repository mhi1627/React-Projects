

import React from 'react'

export default function Footer() {
  return (

    <>
    <div className='-mt-24 flex sm:h-[60vh] justify-between bg-[#B2D6FF] rounded-2xl p-4  flex-col sm:flex-row'>
        <div className='flex flex-col items-center text-center sm:w-1/3'>
           <div className='flex flex-col items-center'>
           <img src="src\assets\osumare_logo.png" alt=""  className='w-35'/>
           <h4 className='-mt-5'>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</h4>
           </div>

           <div className='mt-5'>
            <h3 className='font-black  text-xl'>Address</h3>
            <h4 className=''>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</h4>
           </div>

           <div className='mt-5'>
            <h3 className='font-black text-xl'>Contacts</h3>
            <h4>hello@osumare.in </h4>
            <h4>+91 8459 8762 26</h4>
           </div>
        </div>

        <div className='hidden sm:flex flex-col sm:w-1/3 items-center gap-10 mt-5 h-full' >
            <h3 className='text-xl font-black'>Menu</h3>
            <ul className='items-center flex flex-col gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Work</li>
                <li>Blog</li>
                <li>Career</li>
            </ul>
        </div>

        <div className='mt-5 sm:w-1/3 flex flex-col  items-center gap-5'>
            <h3 className='font-black text-xl'>Social</h3>
            <div className='flex gap-5'>
             <img src="src\assets\Icons\X.png" alt="" />
             <img src="src\assets\Icons\fb.png" alt="" />
             <img src="src\assets\Icons\yt.png" alt="" />
            </div>
            <div className='flex gap-5'>
            <img src="src\assets\Icons\whatsapp-fill.png" alt="" />
            <img src="src\assets\Icons\pinterest-fill.png" alt="" />
            <img src="src\assets\Icons\instagram-fill.png" alt="" />
            </div>
        </div>
       
    </div>
    <div className='text-center p-2'>
        <h3>© 2023 Osumare. All rights reserved.</h3>
    </div>
    </>
  )
}
