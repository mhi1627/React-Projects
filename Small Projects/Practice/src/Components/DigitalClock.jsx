import React from 'react'

export default function DigitalClock() {

 const [first, setFirst] = useState(0);

 const date = new Date();

 useEffect(() => {
   setTimeout(() => {
    setFirst((p)=> p + 1)
   }, 1000)
 }, [])
 
    return (
    <div>{date.toLocaleTimeString}</div>
  )
}
