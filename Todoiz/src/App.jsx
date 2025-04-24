import React, {useReducer, useState, useEffect, useMemo, act, use} from 'react'
import TaskAdd from './Features/Task/TaskAdd'
import TaskList from './Features/Task/TaskList'
import Other from './Components/Other/FilterandSort'
import {task} from './LocalStorage/data'  
import ToggleDarkMode from './Components/ToggleButton/ToggleDarkMode'
import Sidebar from './Components/Sidebar/Sidebar'
export default function App() {
  
  const [completed,setCompleted] = useState(false)
  const [filter,setFilter] = useState('All Task')
  const [sort,setSort] = useState("priority")
  const [sortBy,setSortBy] = useState('ace')
  const [addTask,setAddTask] = useState(false)

  const [todos, dispatch] = useReducer(reducerFunction, [], () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || [];
  });
  
  useEffect (()=>{
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if(storedTodos && storedTodos.length > 0) {
    dispatch({
      type:"initial_load",
      payload:storedTodos
    })
  }
},[])

 
  useEffect (()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
 
 function handleAddTask(todo){
  dispatch({
    type: "added",
    payload:todo
  })
 }

 function handleUpdate(task) {
  dispatch({
    type:"updated",
    payload:task
  })
 }

 function handleDelete(id) {
  if (confirm("Are you sure you want to delete?")) {
    dispatch({
      type: "deleted",
      payload: id,
    });
  }
}


 const handleComplete = (task) => {
  dispatch({
    type:'completed',
    payload:task
  }) 
 }
 

 
  
  function handleFilterChange(filter) {
    setFilter(filter)
  }

  const filteredAndSortedTodos = useMemo( () => {
   const filteredTodos = [...todos]
      if (filter === 'Completed Task') {
        return todos.filter(todo=> todo.completed === true)}
     
        if (filter === "Active Task") {
          return todos.filter(todo=>todo.completed === false)}

      const priorityOrder = {"low":1 , "med":2 , "high":3}
      filteredTodos.sort((a,b)=>
      {
        let priorityA = priorityOrder[a.priority];
        let priorityB = priorityOrder[b.priority];

        if(sort === 'priorityHighToLow') {
          return priorityB - priorityA
        }
        else if (sort === 'priorityLowToHigh') {
          return priorityA - priorityB
        }
        return 0;
      });
       return filteredTodos;
      
  },[todos,filter,sort])

  function handleSortChange(sortValue) {
  setSort(sortValue)
  console.log(sort);
  
  }
    
  return (
    <div className=' w-full h-screen grid bg-slate-100 '>
  {/* <ToggleDarkMode></ToggleDarkMode> */} 

       <TaskAdd handleAddTask={handleAddTask} completed={completed}></TaskAdd>
      {/*<Other handleFilterChange={handleFilterChange} filter={filter} handleSortChange={handleSortChange} sort={sort}></Other>
      <TaskList tasks={filteredAndSortedTodos} handleDelete={handleDelete} handleUpdate={handleUpdate} handleComplete={handleComplete} filter={filter}></TaskList>
    */}
      <Sidebar></Sidebar> 

    </div>
  )
}


function reducerFunction (initialState,action) {
  const {type,payload} = action
  switch(type) {
    case "initial_load": {
      return payload;
    }
    case "added" : {
      return [...initialState,payload]
    }
    case "updated": {
      return initialState.map(todo=>todo.id === payload.id ? payload : todo)
    }
    case "deleted": {
      return initialState.filter(todo=> todo.id !== payload)
    }
    case "completed": {
      return initialState.map(todo=>todo.id === payload.id ? {...todo,completed:!todo.completed}:todo)
    }
  

    default:
  return initialState;

  }
}
