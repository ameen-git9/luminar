import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getService, updateService } from '../api/fetchApi';
import { toast } from 'react-toastify';





function Editservice({ id }) {


    const [show, setShow] = useState(false);
    const [service, setService] = useState({
        title: "", description: "", amount: "", exp_date: "", status: ""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getService(id).then((res) => {
            console.log(res.data);
            setService(res.data)
        })


       
    }, [])

    
     const formSubmit = () => {
            updateService(id, service).then((res) => {
                console.log(res.data);
                toast("Service updated")
                handleClose()
            })
        }


    return (
        <div>
            <button className='btn btn-outline-warning' onClick={handleShow}>Edit</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="title" label="Title" className="mb-3">
                        <Form.Control type="text" placeholder="Title" value={service.title} onChange={(e) => setService({ ...service, title: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="description" label="Description" className="mb-3">
                        <Form.Control type="text" placeholder="description" value={service.description} onChange={(e) => setService({ ...service, description: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="amount" label="Amount" className="mb-3">
                        <Form.Control type="number" placeholder="Amount" value={service.amount} onChange={(e) => setService({ ...service, amount: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="exp_date" label="Exp Date" className="mb-3">
                        <Form.Control type="date" placeholder="date" value={service.exp_date} onChange={(e) => setService({ ...service, exp_date: e.target.value })} />
                    </FloatingLabel>

                    <Form.Select size="sm" onChange={(e) => { setService({ ...service, status: e.target.value }) }}>
                        <option value='pending'>pending</option>
                        <option value='completed'>completed</option>
                    </Form.Select>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={formSubmit} >
                        <i class="fa-solid fa-plus fa-fade" style={{ color: " #07e5f9ff" }}></i>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Editservice