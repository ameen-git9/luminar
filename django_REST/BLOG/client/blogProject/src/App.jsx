import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import './bootstrap.min.css'
import Writerhome from './components/Writerhome'
import Readerhome from './components/Readerhome'
import Blogdetail from './components/Blogdetail'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='reg' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='writer' element={<Writerhome />} />
        <Route path='reader' element={<Readerhome />} />
        <Route path='blog/:id' element={<Blogdetail />} />
      </Routes>
      {/* <Footer/> */}
      <ToastContainer />
    </>
  )
}

export default App
