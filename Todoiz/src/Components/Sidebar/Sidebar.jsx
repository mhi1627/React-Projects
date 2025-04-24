

import React, { children } from 'react'
import TaskAdd from '../../Features/Task/TaskAdd'

export default function Sidebar({handleClick}) {

   

  return (
    <div className=' bg-rose-100 w-1/5 h-full pt-20'>
        
        <Buttons handleClick={handleClick} style={`w-1/2 bg-red-500 `}>Add</Buttons>
        <Buttons>Index</Buttons>
        <Buttons>Today</Buttons>
        <Buttons>Upcoming</Buttons>
        <Buttons>Completed</Buttons>
        <List></List>
    </div>
  )
}

function Buttons ({children, handleClick,style=`w-full rounded-lg mt-1 text-left p-1.5 px-3 hover:bg-slate-400 hover:text-white items-center`}) {
    return (
        <button className={`${style} `} onClick={handleClick}>{children}</button>
    )
}

function MyFilters() {
    return (
        <div></div>
    )
}

function List() {
    return(
        <Buttons>My List</Buttons>
    )
}