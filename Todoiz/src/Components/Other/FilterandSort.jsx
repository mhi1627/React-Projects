import React from 'react'

export default function Other({handleFilterChange,filter,handleSortChange,sort}) {
 
 function handleChange(e) {
   const selectedValue = e.target.value;
   handleFilterChange(selectedValue)
 }


 function handleSort(e){
  const sortValue = e.target.value;

  handleSortChange(sortValue)
  
 }

  return (
    <div className='flex w-2/3 justify-between px-2'>
        <select className='' onChange={handleChange} value={filter}>
        <option value="All Task">All Task</option>
        <option value="Completed Task">Completed</option>
        <option value="Active Task">Active</option>
        </select>

        
    <select name="sort" id="" onChange={handleSort}>
     <option value="Priority" default>Sort By</option>
     <option value="priorityHighToLow">Priority: High to Low</option>
     <option value="priorityLowToHigh">Priority: Low to High</option>
      </select>
       
    </div>
  )
}
