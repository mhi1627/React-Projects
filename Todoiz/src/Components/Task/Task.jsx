import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../../Context/ThemeContext';
export default function Task({task,handleDelete,handleUpdate, handleComplete,}) {
//    console.log(dispatch);
const {title,description,priority,category,completed} = task

const [newTitle,setNewTitle] = useState(title);
const [newDescription,setNewDescription] = useState(description);
const [newCategory,setNewCategory] = useState(category)
const [newPriority,setNewPriority] = useState(priority)
const [isEditing, setIsEditing] = useState(false);
let inputRef = useRef(null);
let content = "";

let priorityBg;
 if(priority === "high"){
    priorityBg = "bg-red-500"
 }
 else if (priority === "med")  {
    priorityBg = 'bg-blue-500'
 }
 else {
    priorityBg = 'bg-green-500'
 }
let categoryBg;
 if(category === "work"){
    categoryBg = "bg-red-500"
 }
 else if (category === "personal")  {
    categoryBg = 'bg-blue-500'
 }
 else {
    categoryBg = 'bg-green-500'
 }


    function handleEdit() {
        setIsEditing(!isEditing)
          if(isEditing) {handleUpdate({
            ...task,
            title: newTitle,
            description: newDescription,
            priority: newPriority,
            category: newCategory,
          });
        } else {
          // When entering edit mode (clicking "📝"), reset the state to the current task values
          setNewTitle(title);
          setNewDescription(description);
          setNewPriority(priority);
          setNewCategory(category);
        }
      }



useEffect(()=>{
    
    if(isEditing && inputRef.current) {
        inputRef.current.focus()
    }
},[isEditing])

if (isEditing) {
content =  <>
<input type="text" id='titleInput'  className='outline-none w-full font-semibold text-lg' ref={inputRef}  value={newTitle} onChange={e=>setNewTitle(e.target.value)}/>
<input type="text" id="taskDescription" className='outline-none w-full text-xs px-2 '  value={newDescription} onChange={e=>setNewDescription(e.target.value)}/>
<div className='flex gap-5'>
   <select name="priority" id="priority" value={newPriority} onChange={e=>setNewPriority(e.target.value)}>
    <option value="priority" disabled>Priority</option>
    <option value="high" >High</option>
    <option value="med" >Med</option>
    <option value="low" >Low</option>
    </select>

    <select name="category" id="category" value={newCategory} onChange={e=>setNewCategory(e.target.value)}>
    <option value="category" disabled>Category</option>
    <option value="work">Work</option>
    <option value="personal">Personal</option>
    <option value="general">General</option>
    </select>
   </div>
</>
}
 
else {
  content =  <>
  <input type="text"  className={`outline-none w-full font-semibold text-lg ${completed ? 'line-through text-gray-500' : '' }`} readOnly value={title} />
  <input type="text" id="taskDescription" className={`outline-none w-full text-xs px-2 ${completed ? 'line-through text-gray-500':''}`} readOnly value={description}/>
  <div className='flex gap-5 mt-3 '>
        <h6 className={`text-xs ${priorityBg}  px-2 py-1 rounded-lg text-white`}>{priority}</h6>
        <h6 className={`text-xs ${categoryBg} px-2 py-1 rounded-lg text-white`}>{category}</h6>
        </div>
  </>

}

// const {darkMode} = useTheme()
return (
    <div className={`flex justify-between items-center h-fit w-full p-3 rounded-2xl mt-1  border-1 bg-purple-50 ${isEditing?'bg-white':''} ${completed? 'bg-green-50':''}`} >
    <div className=''>
    <input type="checkbox" name="" id="" className='text-2xl w-4 h-4'  checked={completed}  onChange={()=>handleComplete(task)}/>
    </div>
        <div id='mid' className='w-full px-3'>
        <>
     {content} 
    
        </>
       
        </div>
    <div className='flex'>
        <button className='text-2xl' onClick={handleEdit}>{isEditing ? "✅" : "📝"}</button>
        <button  className='text-2xl' onClick={()=>handleDelete(task.id)}>🗑️</button>
    </div>
    </div>
)
}
