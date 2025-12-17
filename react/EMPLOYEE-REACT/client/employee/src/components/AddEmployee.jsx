import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddEmployee() {
    return (
        <>
            <div className='d-flex w-100 justify-content-center align-content-center mt-5'>
                <div className='w-50 p-4 border shadow rounded-4'>
                    <FloatingLabel controlId="floatingname" label="Name" className='mt-3'>
                        <Form.Control type="text" placeholder="name" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingsalary" label="Salary" className='mt-3'>
                        <Form.Control type="text" placeholder="salary" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingdesignation" label="Designation" className='mt-3'>
                        <Form.Control type="text" placeholder="designation" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingemail" label="Email" className='mt-3'>
                        <Form.Control type="email" placeholder="email" />
                    </FloatingLabel>

                    <div className='justify-content-center align-content-center text-center mt-3'>
                        <button className='btn btn-primary' style={{fontFamily: "monospace"}}>Add Employee</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee