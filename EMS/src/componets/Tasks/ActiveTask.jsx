import React from 'react'

export default function ActiveTask({taskData}) {
  return (
    <div className='border-2 border-red-600 w-1/4 p-5 rounded-lg mt-5 flex-shrink-0 bg-yellow-500'>  
        <h3 className='bg-red-700 text-sm w-fit p-1 rounded-md'>High</h3>
        <h3 className='mt-2'>{taskData.date}</h3>
        <h1 className='text-2xl font-bold mt-5'>{taskData.title}</h1>
        <h4 className='mt-2'>{taskData.description}</h4>
        <button className='text-center bg-green-500 p-3  mt-3 rounded-lg'>Mark Complete ✔️</button>
        </div>
  )
}
