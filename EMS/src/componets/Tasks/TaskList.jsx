

import React from 'react'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import ActiveTask from './ActiveTask'
// import NewTask from './NewTask';


export default function TaskList({data}) {
 
 
  // console.log(data);
  
  return (
    <div id='allTask' className='mt-10 px-5 flex gap-5 flex-nowrap overflow-x-auto '>
     

     {
       data.tasks.map((task,index)=> {
        
          
       if (task.status.active) {
        return <ActiveTask taskData={task}key={index}></ActiveTask>
       }

       if(task.status.new) { 
        return <NewTask taskData={task} key={index}></NewTask>
      }

       if(task.status.completed){
       return <CompleteTask taskData={task} key={index}></CompleteTask>
      }

       if(task.status.failed){
       return <FailedTask taskData={task} key={index}></FailedTask>}

       })
     }

    
        {/* 
    
        <div className='border-2 border-red-600 w-1/4 p-5 rounded-lg mt-5 flex-shrink-0'>  
        <h3 className='bg-red-700 text-sm w-fit p-1 rounded-md'>High</h3>
        <h3 className='mt-2'>11 Jan 2025</h3>
        <h1 className='text-2xl font-bold mt-5'>Make this project</h1>
        <h4 className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo veniam similique deserunt commodi, voluptatibus voluptatem.</h4>
        </div>
    
        <div className='border-2 border-red-600 w-1/4 p-5 rounded-lg mt-5 flex-shrink-0'>  
        <h3 className='bg-red-700 text-sm w-fit p-1 rounded-md'>High</h3>
        <h3 className='mt-2'>11 Jan 2025</h3>
        <h1 className='text-2xl font-bold mt-5'>Make this project</h1>
        <h4 className='mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo veniam similique deserunt commodi, voluptatibus voluptatem.</h4>
        </div>
    
       
     */}
    
    </div>
  )
}
