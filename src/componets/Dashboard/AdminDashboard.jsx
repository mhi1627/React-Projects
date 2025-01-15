import React from 'react'
import Header from '../Others/Header'
import AllTask from '../Tasks/AllTask'

export default function AdminDashboard({data, handleLogout}) {
  return (  
    <div className='bg-black h-screen '>
       <Header data = {data} handleLogout={handleLogout}></Header>

       <div className='flex bg-[#101010] mt-10 '>
        <div className='flex flex-col w-1/2 p-5'>
            <label htmlFor="title">Title: </label>
            <input type="text"  className='text-black'/> <br />

            <label htmlFor="date">Date:</label>
            <input type="date" name="" id="date"  className='text-black'/> <br />

            <label htmlFor="asignTo">Asign To : </label>
            <input type="text" name="" id="asignTO"  className='text-black' /> <br />

            <label htmlFor="category">Category</label>
            <input type="text"  className='text-black'/>
        </div>
        <div className='w-1/2 p-5'>
            <label htmlFor="description">Description : </label>
            <textarea name="description" id="" className='w-full h-3/4 text-black' ></textarea>
            <button className='bg-green-600 w-full p-3 rounded-lg font-bold'>+ Create Task</button>
        </div>
       </div>


       <AllTask></AllTask>
    </div>
  )
}
