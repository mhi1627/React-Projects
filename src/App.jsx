import React, { useEffect, useState, useContext } from 'react'
import Login from './componets/Login/Login'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componets/Dashboard/AdminDashboard'

import {AuthContext} from "./context/AuthProvider.jsx"
function App() {

  const AuthData = useContext(AuthContext);
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(()=>{
    const savedUser = localStorage.getItem('user');
   console.log(savedUser);
   
    if(savedUser) {
     const {type,data} = JSON.parse(savedUser);
     setUser(type);
     setLoggedInUserData(data)
    }
  },[])

   function handleLogin(email,password) {

     if (AuthData) {

      const employee = AuthData.employees.find((e)=> email == e.email && password == e.password );
      if (employee) {
        setLoggedInUserData(employee);
        setUser('employee');
        localStorage.setItem('user', JSON.stringify({type: 'employee', data : employee}));
        return;
      }

      const admin = AuthData.admin.find((e)=>email == e.email && password == e.password)
      if(admin){
        setLoggedInUserData(admin);
        setUser('admin');
        localStorage.setItem('user', JSON.stringify({type : 'admin', data : admin}));
        return;
      }
      
      
      else {
        alert ("Invalid Credentials ")
      }
     }
    

     
   }
  return (
   <>
   
   <>
  {!user ? (
    <Login handleLogin={handleLogin} />
  ) : user === 'admin' ? (
    <AdminDashboard data={loggedInUserData}  />
  ) : (
    <EmployeeDashboard data={loggedInUserData}  />
  )}
</>
    
   </>
  )
}
<>
    </>


export default App