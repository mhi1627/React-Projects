import React, { useContext } from 'react'
import Header from '../Others/Header'
import ActiveTask from '../Others/TaskStatus'
import TaskList from '../Tasks/TaskList'


export default function EmployeeDashboard({data}) {


 
  return (
    <div className='h-screen bg-[#1C1C1C] '>
        <Header data ={data}></Header>
        <ActiveTask data = {data}></ActiveTask>
        <TaskList data = {data}></TaskList>
    </div>
  )
}
