import Home from "./components/Home"
import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AddStudent from "./components/AddStudent"
import EditStudent from "./components/EditStudent"
import { ToastContainer } from 'react-toastify';
import "./bootstrap.min.css"
function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddStudent/>} />
        <Route path="edit/:id" element={<EditStudent/>} />
      </Routes >
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
