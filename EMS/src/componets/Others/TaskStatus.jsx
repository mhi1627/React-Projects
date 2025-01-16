import React from 'react'


export default function ActiveTask({data}) {

  const tasks = [
    {count: data.taskCounts.newTask, lable:"New Task", bgColor:"bg-blue-500"},
    {count: data.taskCounts.activeTask, lable:"Active Task", bgColor:"bg-yellow-500"},
    {count: data.taskCounts.completedTask, lable:"Completed Task", bgColor:"bg-green-500"},
    {count: data.taskCounts.failedTask, lable:"Failed Task", bgColor:"bg-red-500"}
  ]
  return (
   <div className='flex gap-5 px-2'>
   {tasks.map((task, index)=>{
    return (
    <div key={index} className= {`w-1/2 py-10 px-7 font-bold mt-3 rounded-md ${task.bgColor} `}>
    <h2 className='font-bold text-3xl'>{task.count}</h2>
    <h3 className='text-2xl '>{task.lable}</h3>
  </div> 
    )
   })}
   </div>
  )
}
