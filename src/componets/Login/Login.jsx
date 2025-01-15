import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

export default function Login({handleLogin}) {
 
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("");
  const context = useContext(AuthContext);
  // console.log(context);
  

    const onSubmitHandler = (e)=>{
         e.preventDefault();
        handleLogin(Email,Password)
        console.log('the email is ' + Email);
        console.log('the password is ' + Password);
        
        
        setEmail('');
        setPassword(''); 
    }

   

  return (
   <div className='w-screen h-screen bg-black flex items-center justify-center'>
     <div className='text-white border-2 border-emerald-600 p-20'>
        <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
             onSubmitHandler(e);
        }}>
            <input type="email" placeholder='enter your email' className='bg-transparent p-3 border-2 border-emerald-600 rounded-full text-xl outline-none text-white' 
           onChange={(e)=>setEmail(e.target.value)} value={Email}/>
            <input type="password" placeholder='Enter Password' className='bg-transparent p-3 border-2 border-emerald-600 rounded-full text-xl outline-none text-white mt-3'
            onChange={(e)=>{setPassword(e.target.value)}} value={Password}
            />
            <button className=' bg-emerald-600 p-3 rounded-full mt-3 w-2/3 text-white text-xl'>Log In</button>
        </form>
    </div>
   </div>
  )
}

