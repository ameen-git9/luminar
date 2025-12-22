import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Register() {
    return (
        <div className='container mt-5'>
            <h1 className='m-3 text-center'>Register</h1>
            <div>
                
                <FloatingLabel controlId="floatingUsername" label="Username" className='m-3'>
                    <Form.Control type="text" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='m-3'>
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingEmail" label="Email" className='m-3'>
                    <Form.Control type="email" placeholder="Password" />
                </FloatingLabel>
                <div className='d-flex justify-content-center m-2'>
                    <button className='btn btn-primary'>Create</button>
                </div>
            </div>

        </div>
    )
}

export default Register