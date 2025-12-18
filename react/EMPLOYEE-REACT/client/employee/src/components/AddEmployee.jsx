import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../api/fetchApi';

function AddEmployee() {

    const [employee, setEmployee] = useState({
        name: "", salary: "",designation:"", email: ""
    })

    const navigate=useNavigate()



    const formSubmit=()=>{
        const {name,salary,designation,email}=employee
        if(!name || !salary || !designation || !email){
            toast("invalid input")

        }
        else{
            addEmployee(employee).then((res)=>{
                toast("Employee added")
                navigate('/')
                
            })
        }
    }


    return (
        <>
            <div className='d-flex w-100 justify-content-center align-content-center mt-5'>
                <div className='w-50 p-4 border shadow rounded-4'>
                    <FloatingLabel controlId="floatingname" label="Name" className='mt-3'>
                        <Form.Control type="text" placeholder="name" onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingsalary" label="Salary" className='mt-3'>
                        <Form.Control type="text" placeholder="salary" onChange={(e) => { setEmployee({ ...employee, salary: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingdesignation" label="Designation" className='mt-3'>
                        <Form.Control type="text" placeholder="designation" onChange={(e) => { setEmployee({ ...employee, designation: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingemail" label="Email" className='mt-3'>
                        <Form.Control type="email" placeholder="email" onChange={(e) => { setEmployee({ ...employee, email: e.target.value }) }} />
                    </FloatingLabel>

                    <div className='justify-content-center align-content-center text-center mt-3'>
                        <button className='btn btn-primary' style={{fontFamily: "monospace"}} onClick={()=>{formSubmit()}}>Add Employee</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee