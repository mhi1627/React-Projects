import React, { useState } from 'react'
import {data} from "./Data/data"

export default function App() {
 function onButtonClick(){

 }
  return (
    <div className='bg-slate-900  flex flex-col justify-center items-center'>
    <h1 className='text-center font-bold text-2xl mt-2 mb-5'>Accordion Project</h1>
    <button onClick={onButtonClick}>Enable Single Selection</button>
   
    <div className=' p-6 w-1/2'>
     {data.map((e)=>{
      return (
        <Accordion data={e}></Accordion>
      )
     })}
     
    </div>
    </div>
  )
}



function Accordion({data}) {
 const [selected,setSelected] = useState();

 function onClick() {
  
  if(selected){
    setSelected()
  }
  else {
    setSelected(data.id);
  }
 }
  
    return (
      <>
  <button className='h-14 bg-red-800 w-full mt-3' onClick={onClick}>{data.title}</button>
   {selected===data.id? <
    div className= {`bg-amber-200`} >
     {data.description}
     </div>:''}
  </>
    )
  

}