import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { toast } from 'react-toastify'
import { addTodo } from '../api/fetchApi'

function Add() {

    const [show, setShow] = useState(false)


    const [todo, setTodo] = useState({
        title: "",
        description: "",
        due_date: ""
    })

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
    }

    const formSubmit = () => {
        const { title, description, due_date } = todo

        if (!title || !description || !due_date) {
            toast("invalid")
        }
        else {
           
            addTodo(todo, header).then((res) => {
                console.log(res.data)
                toast("TODO ADDED")
                handleClose()
            })
        }

        


    }

    
    return (
        <>
            <button className='btn btn-info' onClick={handleShow}>
                Add TODO
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    
                    <FloatingLabel label="Title" className='m-3' >
                            <Form.Control type="text" placeholder="..."  onChange={(e) => { setTodo({ ...todo, title: e.target.value }) }} />
                        </FloatingLabel>

                    <FloatingLabel label="Description" className='m-3'>
                        <Form.Control type="text" placeholder="..." onChange={(e) =>setTodo({ ...todo, description: e.target.value })}/>
                    </FloatingLabel>

                    <FloatingLabel label="Due date" className='m-3'>
                        <Form.Control  type="date"placeholder="..."onChange={(e)=>setTodo({ ...todo, due_date: e.target.value })}/>
                    </FloatingLabel>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                   
                    <Button variant="primary" onClick={formSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add
