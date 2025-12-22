import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className='container mt-5'>
            <h1 className='m-3 text-center'>Login</h1>
            <div>
                
                <FloatingLabel controlId="floatingUsername1" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword1" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary'>Login</button>
                </div>
            </div>

        </div>
  )
}

export default Login