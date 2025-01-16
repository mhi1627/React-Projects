import React from 'react'
import Header from '../Others/Header'
import AllTask from '../Others/AllTask'
import CreateTask from '../Others/CreateTask'

export default function AdminDashboard({data, handleLogout}) {
    const employees = JSON.parse(localStorage.getItem('Employees')) || [];
  
    const refreshEmployees = () => {
      // Notify all components to reload data
    };
  return (  
    <div className='bg-black  '>
       <Header data = {data} handleLogout={handleLogout}></Header>
       <CreateTask refreshEmployees={refreshEmployees} />
       <AllTask data={data}></AllTask>
    </div>
  )
}
