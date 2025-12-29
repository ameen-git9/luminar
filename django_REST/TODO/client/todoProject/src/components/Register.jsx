import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { register } from '../api/fetchApi';


function Register() {

    const [user, setUser] = useState({
        username: "", email: "", password: ""
    })
    const navigate=useNavigate()

    const formSubmit = () => {
        const { username, email, password } = user
        if (!username || !email || !password) {
            toast('invalid')
        }
        else {
            register(user).then((res)=>{
                console.log(res.data);
                toast("data added")
                navigate("/")
                
            })
        }


    }

    return (
        <div className='container mt-5'>
            <h1 className='m-3 text-center'>Register</h1>
            <div>

                <FloatingLabel controlId="floatingUsername" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="..."  onChange={(e) => { setUser({ ...user, username: e.target.value }) }}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className='m-3'>
                    <Form.Control type="email" placeholder="..."onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                </FloatingLabel>
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary' onClick={formSubmit}>Create</button>
                </div>
            </div>

        </div>
    )
}

export default Register