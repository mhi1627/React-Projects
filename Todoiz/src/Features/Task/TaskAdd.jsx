import React, {  useState } from 'react'

export default function TaskAdd({handleAddTask, completed}) {
   
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [priority,setPriority] = useState("low")
  const [category,setCategory] = useState("general")

 
  function handleAdd(){
      if(title && description) {
       handleAddTask( {
        id: Date.now(),
        title,
        description,
        priority,
        category,
        completed,
       })
       setTitle("")
       setDescription("")
      }     
    }

       
    
  
  
  return (
    <form className='bg-white w-1/2 p-3 mt-5 rounded-xl h-fit border-1 border-black' onSubmit={handleAdd}>
    <div  >
      
       <div className='w-full px-2 ' >
       <input type="text" name="" id="" placeholder='Title of the Task'  className='outline-none h-10 rounded py-3 w-full' value={title} onChange={(e)=>setTitle(e.target.value)}/> <br /><hr></hr>
       <input type="text"  placeholder="Description" className='outline-none mt-1 mb-4 w-full rounded px-2 py-1 text-sm ' value={description} onChange={e=>setDescription(e.target.value)}/> <hr />
       </div>

       <div className='flex justify-between mt-3'>
       <div className='flex gap-5'>
       <select name="priority" id="priority" onChange={e=>setPriority(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="high">High</option>
        <option value="med">Med</option>
        <option value="low">Low</option>
        </select>

        <select name="category" id="category" onChange={e=>setCategory(e.target.value)}>
        <option value="category">Category</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="general">General</option>
        </select>
       </div>

        <div className='flex justify-between gap-5'>
            <button className='w-18 rounded h-7 bg-neutral-200 text-sm hover:bg-neutral-300'>Cancel</button>
            <input type='submit' value={"Add Task"} className='w-18 bg-red-300 rounded h-7 text-white text-sm hover:bg-red-500'></input>
        </div>
       </div>
    </div>
    </form>
  )
}
