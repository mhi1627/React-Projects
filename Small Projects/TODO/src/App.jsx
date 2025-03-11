import React from 'react'
import { useState } from 'react'

export default function App() {
  const [tasks, setTask] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [completed,setCompleted] = useState([])
  
  console.log(completed);
  
  function handleClick () {
      if(!title.trim() || !description.trim()){return alert("Add Title & Description")}
       const newTask = [...tasks, {id:Date.now(), title:title,description:description}]
      setTask(newTask)
      setTitle("")
      setDescription("")
       
  }
  function handleMarkComplete(taskid) {

    const completedTask = tasks.find(task=>task.id===taskid)
    setCompleted([...completed,completedTask])
    
    setTask(tasks.filter(task=>task.id !== taskid ))
  }

  function handleDeleteTask(taskid) {
    setTask(tasks.filter(task=>task.id !== taskid ))
  }
  return (<>
  <div>Todo</div>
  <input type="text" placeholder='Add Title' value={title} onChange={e => {setTitle(e.target.value)}}/>
  <input type="text" placeholder='Add Description' value={description} onChange={e => {setDescription(e.target.value)}}/>
  <button onClick={handleClick}>Add</button>

  <AllTask tasks={tasks} handleMarkComplete={handleMarkComplete} completed={completed} handleDeleteTask={handleDeleteTask}></AllTask>
  </>
  )
}

function AllTask({tasks,handleMarkComplete,completed,handleDeleteTask}) {
 

  
  return (
   <>
    <div>
    All Tasks
    {tasks.length === 0 ? <p>No Pending Tasks</p>:null}
   {tasks.map((task)=>(
   <div key={task.id} style={{borderWidth:2 + 'px ',borderColor:"red",borderStyle:'solid',marginTop:5}}>
     <h3>{task.title}</h3>
     <p>{task.description}</p>
     <button onClick={()=>handleMarkComplete(task.id)}>Mark ✅</button>
     <button onClick={()=>handleDeleteTask(task.id)}>Delete 🗑️</button>
   </div>
   ))}
  </div>

   <div>
    Completed Tasks
    {completed.map(ctask=>(
      <h3 key={ctask.id}>{ctask.title}</h3>
    ))}
   </div>

   </>
  )

}


