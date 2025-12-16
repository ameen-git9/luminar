import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addStudent } from '../api/fetchApi';
import { useNavigate } from 'react-router-dom';



function AddStudent() {
    const [student, setStudents] = useState({
        name: "", place: "", email: "", phone: ""
    })

    const navigate=useNavigate()

    console.log(student);


    const formSubmit=()=>{
        const {name,place,email,phone}=student
        if(!name || !place || !email || !phone){
            toast("invalid input")

        }
        else{
            addStudent(student).then((res)=>{
                console.log(res.data);
                toast("Student added")
                navigate('/')
                
            })
        }
    }

    return (
        <div className='d-flex w-100 justify-content-center align-content-center mt-5'>
            <div className='w-50 p-4 border shadow'>

                <FloatingLabel controlId="floatingname" label="Name" className='mt-2'>
                    <Form.Control type="text" placeholder="Name" onChange={(e) => { setStudents({ ...student, name: e.target.value }) }} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingplace" label="Place" className='mt-2'>
                    <Form.Control type="text" placeholder="Place" onChange={(e) => { setStudents({ ...student, place: e.target.value }) }} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingemail" label="Email" className='mt-2'>
                    <Form.Control type="email" placeholder="Email" onChange={(e) => { setStudents({ ...student, email: e.target.value }) }} />
                </FloatingLabel>

                <FloatingLabel controlId="floatingphone" label="Phone" className='mt-2'>
                    <Form.Control type="text" placeholder="Phone" onChange={(e) => { setStudents({ ...student, phone: e.target.value }) }} />
                </FloatingLabel>
                <div className='d-flex justify-content-center mt-3'>
                    <button className='btn btn-success' onClick={()=>{formSubmit()}}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddStudent