import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { login } from '../api/fetchApi';

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
                toast("success")
                navigate("home")
                

            }).catch((err)=>{
                toast("invalid usernamr or password ")
            })
        }


    }


    return (
        <div className='container mt-5'>
            <h1 className='m-3 text-center'>Login</h1>
            <div>

                <FloatingLabel controlId="floatingUsername1" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="..." value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword1" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </FloatingLabel>

                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary' onClick={formSubmit}>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login