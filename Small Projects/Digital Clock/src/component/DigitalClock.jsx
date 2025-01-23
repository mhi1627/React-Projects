import React, { useState, useEffect } from 'react'

export default function DigitalClock() {

    const [first, setfirst] = useState(0)

    useEffect(() => {
     setInterval(() => {
        setfirst((p) => p + 1)
     }, 1000);
    }, [])
    
    const date = new Date();
   
  function getTime (){
    let result = "";
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
     
    const ampm = hours < 12 ? "AM" : "PM"
    hours = hours % 12 || 12
    return result = (`${hours}:${minutes}:${seconds}`)

  }
    
  return (
    <div>{getTime()}</div>
  )
}