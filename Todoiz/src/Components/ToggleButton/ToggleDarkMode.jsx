

import React from 'react'
import { useTheme } from '../../Context/ThemeContext'
export default function ToggleDarkMode() {
    const {darkMode,setDarkMode} = useTheme()
  return (
   <button onClick={()=>setDarkMode(!darkMode)}>{darkMode? "☀️" : "🌙"}</button>
  )
}
