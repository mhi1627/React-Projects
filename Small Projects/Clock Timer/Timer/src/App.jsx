import { useState } from "react"

export default function App(){
    return (
      <Board></Board>
    )
}

function Board(){

  const [isXNext, setIsXnext] = useState(true)
  const [squares, setSquares ] = useState(Array(9).fill(null))

  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    
    for(let i = 0; i< lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
        console.log(squares[a]);
       }
      }
      return null;
  }

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
  if(isXNext){
    nextSquares[i] = "X";
  }
  else {
    nextSquares[i] = "O"
  }
   setSquares(nextSquares)
   setIsXnext(!isXNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = `Winner :` + winner;
  }
  else {
    status = 'next Player :' + (isXNext?"X":"O")
  }
  return (
   <>
   <div><h1>{status}</h1></div>
    <div>
      <Square value = {squares[0]} onSquareClick={()=>handleClick(0)}></Square>
      <Square value = {squares[1]} onSquareClick={()=>handleClick(1)}></Square>
      <Square value = {squares[2]} onSquareClick={()=>handleClick(2)}></Square>
    </div>
    <div>
      <Square value = {squares[3]} onSquareClick={()=>handleClick(3)}></Square>
      <Square value = {squares[4]} onSquareClick={()=>handleClick(4)}></Square>
      <Square value = {squares[5]} onSquareClick={()=>handleClick(5)}></Square>
    </div>
    <div>
      <Square value = {squares[7]} onSquareClick={()=>handleClick(7)}></Square>
      <Square value = {squares[8]} onSquareClick={()=>handleClick(8)}></Square>
      <Square value = {squares[9]} onSquareClick={()=>handleClick(9)}></Square>
    </div>
   </>
  )
}

function Square({onSquareClick, value}){
  


  return (
    <button onClick={onSquareClick}>{value}</button>
  )
}