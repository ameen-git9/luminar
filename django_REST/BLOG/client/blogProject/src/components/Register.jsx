import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify'
import { Link,useNavigate } from 'react-router-dom';
import { register } from '../api/fetchApi';

function Register() {


  const [user, setUser] = useState({
    username: "", email: "", password: ""
  })
  const navigate = useNavigate()

  const formSubmit = () => {
    const { username, email, password } = user
    if (!username || !email || !password) {
      toast('invalid')
    }
    else {
      register(user).then((res) => {
        console.log(res.data);
        toast("user added")
        navigate("/")

      })
    }


  }



  return (
    <div className='container mt-5'>
      <div className='border shadow p-5'>
        <h1 className='p-3 text-center'>Register</h1>
        <FloatingLabel controlId="floatingInput" label="Username" className="mb-3" onChange={(e) => { setUser({ ...user, username: e.target.value }) }}>
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>


        <FloatingLabel controlId="floatingemail" label="Email" className="mb-3" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
          <Form.Control type="email" placeholder="..." />
        </FloatingLabel>


        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <div className='d-flex justify-content-center m-2'>
          <button className='btn btn-primary' onClick={formSubmit}>Create</button>
        </div>
        <div className='text-center'>
          <p>Have an account?
            <Link to={'/'}>Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register