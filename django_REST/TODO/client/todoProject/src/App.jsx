import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='reg' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
