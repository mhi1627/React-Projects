import React from 'react'
import Task from '../../Components/Task/Task'
import './tasklist.css'

export default function TaskList({tasks,handleDelete,handleUpdate, handleComplete,filter}) {
  
    
  return (
    <div id='taskList' className='bg-slate-50 rounded-xl border-1 h-fit flex flex-col items-center w-2/3 p-2 overflow-scroll'>
    <h2>{filter}</h2>
   
     { tasks.length === 0 ? <h2>No Tasks</h2> :
      (tasks.map((task)=>(<Task task={task} key={task.id} handleDelete={handleDelete} handleUpdate={handleUpdate} handleComplete={handleComplete} ></Task>)) 
     )
      }
    </div>
  )
}
