import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addService } from '../api/fetchApi';

function Addservice({id}) {


  const [show, setShow] = useState(false);

  const [service, setService] = useState({
    title: "", description: "", amount: "", exp_date: ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formSubmit = () => {
    const {title,description,amount,exp_date}=service
    if(!title || !description || !amount || !exp_date){
      toast("Invalid input")
    }
    else{
      addService(id,service).then((res)=>{
        console.log(res.data);
        toast("Service Added")  
        handleClose()   
      })
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add service
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="title" label="Title" className="mb-3">
            <Form.Control type="text" placeholder="Title" onChange={(e) =>setService({...service,title:e.target.value}) } />
          </FloatingLabel>


          <FloatingLabel controlId="description" label="Description" className="mb-3">
            <Form.Control type="text" placeholder="description" onChange={(e) =>setService({...service,description:e.target.value}) }/>
          </FloatingLabel>

          <FloatingLabel controlId="amount" label="Amount" className="mb-3">
            <Form.Control type="number" placeholder="Amount" onChange={(e) =>setService({...service,amount:e.target.value}) }/>
          </FloatingLabel>

          <FloatingLabel controlId="exp_date" label="Exp Date" className="mb-3">
            <Form.Control type="date" placeholder="date"onChange={(e) =>setService({...service,exp_date:e.target.value}) } />
          </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formSubmit}>
            <i class="fa-solid fa-plus fa-fade" style={{ color: " #07e5f9ff" }}></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addservice