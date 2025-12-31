import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path='reg' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='add' element={<Add/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
