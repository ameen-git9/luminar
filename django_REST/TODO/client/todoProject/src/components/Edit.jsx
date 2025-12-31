import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useState, useEffect } from 'react'
import { getTodo } from '../api/fetchApi'
import { editTodo } from '../api/fetchApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Edit({ id }) {


    const navigate=useNavigate()


    const [todo, setTodo] = useState({
        title: "", description: "", due_date: "", status: ""
    })


    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
    }

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)




    useEffect(() => {
        getTodo(id, header).then((res) => {
            console.log(res.data)
            setTodo(res.data)

        })
    }, [])

    const formSubmit = () => {
        editTodo(id, todo,header).then((res)=>{
            console.log(res.data);
            toast("Todo Updated")
            navigate("/home")

            
            
        })

    }





    return (
        <div>
            <button className='btn btn-warning' onClick={handleShow}>EDIT</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>UPDATE todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <FloatingLabel label="Title" className='m-3' >
                        <Form.Control type="text" placeholder="..." value={todo.title} onChange={(e) => { setTodo({ ...todo, title: e.target.value }) }} />
                    </FloatingLabel>

                    <FloatingLabel label="Description" className='m-3'>
                        <Form.Control type="text" placeholder="..." value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
                    </FloatingLabel>


                    <FloatingLabel label="Due date" className='m-3'>
                        <Form.Control type="date" placeholder="..." value={todo.due_date} onChange={(e) => setTodo({ ...todo, due_date: e.target.value })} />
                    </FloatingLabel>


                    <FloatingLabel label="Status" className='m-3' >
                       <Form.Select aria-label="Default select example" value={todo.status} onChange={(e) => { setTodo({ ...todo, status: e.target.value }) }}>
                        
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        
                    </Form.Select>  
                    </FloatingLabel>

                
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>


                    <Button variant="primary" onClick={formSubmit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Edit