import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getStudent, updateStudent } from '../api/fetchApi';
import { useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { Toast } from 'react-bootstrap';
import { toast } from 'react-toastify';

function EditStudent() {

    const [student, setStudents] = useState({
        name: "", place: "", email: "", phone: ""
    })

    const navigate=useNavigate()

    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        getStudent(id).then((res) => {
            console.log(res.data);
            setStudents(res.data)

        })
    }, [])

    const formSubmit = () => {
        updateStudent(id,student).then((res)=>{
            console.log(res.data);
            toast("student data updated")
            navigate('/')
            
        })
    }







        return (
            <div>
                <div className='d-flex w-100 justify-content-center align-items-center mt-5'>
                    <div className='w-50 p-4 border shadow g-5'>
                        <FloatingLabel controlId="name" label="Name" className='mt-2'>
                            <Form.Control type="text" placeholder="..." value={student.name} onChange={(e) => { setStudents({ ...student, name: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="place" label="Place" className='mt-2'>
                            <Form.Control type="text" placeholder="..." value={student.place} onChange={(e) => { setStudents({ ...student, place: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="email" label="Email" className='mt-2'>
                            <Form.Control type="email" placeholder="..." value={student.email} onChange={(e) => { setStudents({ ...student, email: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="phone" label="Phone" className='mt-2'>
                            <Form.Control type="text" placeholder="..." value={student.phone} onChange={(e) => { setStudents({ ...student, phone: e.target.value }) }} />
                        </FloatingLabel>
                        <div className='d-flex justify-content-center p-3 align-items-center'>
                            <button className='btn btn-success' type='submit' onClick={formSubmit}>Update</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    export default EditStudent