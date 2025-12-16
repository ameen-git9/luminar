import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function EditStudent() {
    return (
        <div>
            <div className='d-flex w-100 justify-content-center align-items-center mt-5'>
                <div className='w-50 p-4 border shadow g-5'>
                    <FloatingLabel controlId="name" label="Name" className='mt-2'>
                        <Form.Control type="text" placeholder="..." />
                    </FloatingLabel>
                    <FloatingLabel controlId="place" label="Place" className='mt-2'>
                        <Form.Control type="text" placeholder="..." />
                    </FloatingLabel>
                    <FloatingLabel controlId="email" label="Email" className='mt-2'>
                        <Form.Control type="email" placeholder="..." />
                    </FloatingLabel>
                    <FloatingLabel controlId="phone" label="Phone" className='mt-2'>
                        <Form.Control type="text" placeholder="..." />
                    </FloatingLabel>
                    <div className='d-flex justify-content-center p-3 align-items-center'>
                        <button className='btn btn-success' type='submit'>Add</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditStudent