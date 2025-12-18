import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getEmployee, updateEmployee } from '../api/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function EditEmployee() {

    const [employee, setEmployee] = useState({
        name: "", salary: "", designation: "", email: ""
    })

    const navigate = useNavigate()

    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        getEmployee(id).then((res) => {
            console.log(res.data);
            setEmployee(res.data)

        })
    }, [])

    const formSubmit = () => {
        updateEmployee(id, employee).then((res) => {
            console.log(res.data);
            toast("Employee  updated")
            navigate('/')

        })
    }





    return (
        <>
            <div className='d-flex w-100 justify-content-center align-content-center mt-5'>
                <div className='w-50 p-4 border shadow rounded-4'>
                    <FloatingLabel controlId="name" label="Name" className='mt-3'>
                        <Form.Control type="text" placeholder="name" value={employee.name} onChange={(e) => { setEmployee({ ...employee, name: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="salary" label="salary" className='mt-3'>
                        <Form.Control type="text" placeholder="Salary" value={employee.salary} onChange={(e) => { setEmployee({ ...employee, salary: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="designation" label="Designation" className='mt-3'>
                        <Form.Control type="text" placeholder="designation" value={employee.designation} onChange={(e) => { setEmployee({ ...employee, designation: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel controlId="email" label="Email" className='mt-3'>
                        <Form.Control type="email" placeholder="email" value={employee.email} onChange={(e) => { setEmployee({ ...employee, email: e.target.value }) }} />
                    </FloatingLabel>

                    <div className='justify-content-center align-content-center text-center mt-3'>
                        <button className='btn btn-primary' type='submit' style={{ fontFamily: "monospace" }} onClick={()=>{formSubmit()}}>Update Employee</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default EditEmployee