import React, { useState } from 'react';

export default function CreateTask() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const employees = JSON.parse(localStorage.getItem('Employees'));
  
  const submitHandler = (e) => {
    e.preventDefault();
  
    const task = {
      title,
      date,
      category,
      description,
      status: {
        active: false,
        completed: false,
        failed: false,
        new_task: true,
      },
    };
  
    employees.forEach((emp) => {
      if (emp.name === asignTo) {
        emp.tasks.push(task);
        emp.taskCounts.newTask++;
      }
    });
  
    localStorage.setItem('Employees', JSON.stringify(employees));
  
  
    if (typeof refreshEmployees === 'function') refreshEmployees();
  

    setTitle('');
    setDate('');
    setAsignTo('');
    setDescription('');
    setCategory('');
  
    alert('Task added successfully!');
  };
  

  return (
    <div className="flex bg-[#101010] mt-10">
      <form
        onSubmit={submitHandler}
        className="flex w-full"
      >
        <div className="flex flex-col w-1/2 p-5">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            className="text-black"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            className="text-black"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <br />

          <label htmlFor="asignTo">Assign To: </label>
          <select
          type="text"
            id="asignTo"
            className="text-black"
            onChange={(e) => setAsignTo(e.target.value)}
            value={asignTo}>
                <option value="asignTo" className='text-black'>Asign To -</option>
                <option value="John" className='text-black' onChange={(e)=>setAsignTo(e.target.value)}>John</option>
                <option value="Jane" className='text-black' onChange={(e)=>setAsignTo(e.target.value)}>Jane</option>
                <option value="WIll" className='text-black' onChange={(e)=>setAsignTo(e.target.value)}>Will</option>
                <option value="Mike" className='text-black' onChange={(e)=>setAsignTo(e.target.value)}>Mike</option>
                <option value="Lucy" className='text-black' onChange={(e)=>setAsignTo(e.target.value)}>Lucy</option>
          </select>
            
        

          <br />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            className="text-black"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>
        <div className="w-1/2 p-5">
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            className="w-full h-3/4 text-black"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 w-full p-3 rounded-lg font-bold"
          >
            + Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
