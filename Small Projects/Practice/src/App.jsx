import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    
  function increment(){
    setCount(count+1)
  }
  function decrement(){
    setCount(count-1)
   
  }
  return (
    <>
    <button onClick={decrement}>-</button>
    <h1>Counter : {count}</h1>
    <button onClick={increment}>+</button>
    </>
  )
}

export default App


