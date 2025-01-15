

import React, {createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext(null);
 


export default function AuthProvider({children}) {

  setLocalStorage();
  const [userdata, setUserData] = useState(null);
useEffect ( () =>{
  const {employees, admin} = getLocalStorage();
  setUserData({employees,admin})
}
,[])

  return (
    <div>
        <AuthContext.Provider value={userdata}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
