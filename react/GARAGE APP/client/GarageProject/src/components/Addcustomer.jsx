import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCustomer } from '../api/fetchApi';
import { toast } from 'react-toastify';

function Addcustomer() {


  const [show, setShow] = useState(false);


  const [customer, setCustomer] = useState({
    customer_name: "", vehicle_no: "", phone: "", image: ""
  })


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const header={
    "Content-type":"multipart/form-data"
  }


  const formSubmit = () => {
    const { customer_name, vehicle_no, phone, image } = customer
    if (!customer_name || !vehicle_no || !phone || !image) {
      toast("Invalid input")
    }
    else {
      const formData=new FormData
      formData.append("customer_name",customer.customer_name)
      formData.append("vehicle_no",customer.vehicle_no)
      formData.append("phone",customer.phone)
      formData.append("image",customer.image)
      addCustomer(formData,header).then((res)=>{
        console.log(res.data);
        toast("Customer Added")
        handleClose()     
      })
      }
    }


    return (
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add customer
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="customer_name" label="Name" className="mb-3">
              <Form.Control type="text" placeholder="Name" onChange={(e) => setCustomer({ ...customer, customer_name: e.target.value })} />
            </FloatingLabel>


            <FloatingLabel controlId="vehicle_no" label="Vehicle no" className="mb-3">
              <Form.Control type="text" placeholder="vehicle" onChange={(e) => setCustomer({ ...customer, vehicle_no: e.target.value })} />
            </FloatingLabel>

            <FloatingLabel controlId="phone" label="Phone" className="mb-3">
              <Form.Control type="number" placeholder="phone" onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
            </FloatingLabel>

            <FloatingLabel controlId="image" label="Image" className="mb-3">
              <Form.Control type="file" placeholder="image" onChange={(e) => setCustomer({ ...customer, image: e.target.files[0] })} />
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

  export default Addcustomer