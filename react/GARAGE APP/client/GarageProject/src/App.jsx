import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Customer from './components/Customer'
import Service from './components/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='customer' element={<Customer />} />
        <Route path='service/:id' element={<Service />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
