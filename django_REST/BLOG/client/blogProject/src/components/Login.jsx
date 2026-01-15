import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom';
import { login } from '../api/fetchApi';
import { Link } from 'react-router-dom';


function Login() {


   const [user, setUser] = useState({
        username: "", password: ""
    })
    const navigate = useNavigate()

    const formSubmit = () => {
        const { username, password } = user
        if (!username || !password) {
            toast('invalid')
        }
        else {
            login(user).then((res) => {
                console.log(res.data);
                sessionStorage.setItem("token",res.data.token)
                toast("Login success")
                navigate("home")
                

            }).catch((err)=>{
                toast("invalid usernamr or password ")
            })
        }


    }


  return (
    <div className='container mt-5'>

      <div className='border shadow p-5 '  >
        <h1 className='p-3 text-center'>Login</h1>
        <FloatingLabel controlId="floatingname" label="Username" className="mb-3" onChange={(e) => { setUser({ ...user, username: e.target.value }) }}>
          <Form.Control type="text" placeholder="..." />
        </FloatingLabel>


        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <div className='d-flex justify-content-center m-2'>
          <button className='btn btn-primary' onClick={formSubmit} >Login</button>

        </div>
        <div>
          <p className='text-center'>Don't have an account? <Link to={'reg'}>Sign up</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Login