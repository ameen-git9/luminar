import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add' element={<AddEmployee />} />
        <Route path='edit' element={<EditEmployee />} />
        </Routes >
        <Footer />
        <ToastContainer />
      </>
      )
}

      export default App;
