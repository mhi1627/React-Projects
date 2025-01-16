import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider';

export default function AllTask() {
  const data = useContext(AuthContext)

 
  
  return (
    <div className='p-3  mt-3'>
     <div className='flex justify-between py-3 px-10  bg-zinc-800'>
        <h3 className='w-1/5 text-2xl'>Name</h3>
        <h3 className='w-1/5 text-2xl'>New</h3>
        <h3 className='w-1/5 text-2xl'>Active</h3>
        <h3 className='w-1/5 text-2xl'>Completed</h3>
        <h3 className='w-1/5 text-2xl'>Failed</h3>
     </div>

    { data.employees.map((emp,index)=>{
      return (
        <div key={index} className='flex gap py-3 px-10  bg-slate-800 mt-3'>
        <h3 className ='w-1/5  text-bold text-xl'>{emp.name}</h3>
        <h3 className ='w-1/5 text-blue-500 text-bold text-xl'>{emp.taskCounts.newTask}</h3>
        <h3 className ='w-1/5 text-yellow-500 text-bold text-xl'>{emp.taskCounts.activeTask}</h3>
        <h3 className ='w-1/5 text-green-500 text-bold text-xl'>{emp.taskCounts.completedTask}</h3>
        <h3 className ='w-1/5 text-red-500 text-bold text-xl'>{emp.taskCounts.failedTask}</h3>
      </div >      )
     })
     }
   </div>
  )
}
