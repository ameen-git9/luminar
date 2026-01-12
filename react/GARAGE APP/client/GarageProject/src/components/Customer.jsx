import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { deleteCustomer, getAllCustomer } from '../api/fetchApi';
import { Link } from 'react-router-dom';
import Addcustomer from './Addcustomer';
import { toast } from 'react-toastify';
import { customerAddContext, customerDeleteContext } from '../ContextApi';




function Customer() {
  const [customer, setCustomer] = useState([]);


  const {customerContextData} = useContext(customerAddContext)
  const {setCustomerDeleteContextData} = useContext(customerDeleteContext)
  const {customerDeleteContextData} = useContext(customerDeleteContext)




  useEffect(() => {
    getAllCustomer().then((res) => {
      console.log(res.data);
      setCustomer(res.data);
    });
  }, [customerContextData,customerDeleteContextData]);

  const deleteData = (id) => {
    deleteCustomer(id).then((res) => {
      console.log(res.data);
      toast("customer deleted")
      setCustomerDeleteContextData(res)

    })
      .catch((err) => {
        console.log();
        toast("services pending...")

      })
  }

  return (
    <Container className="mt-4">
      <Row>

        <Col sm={3}>
          <Addcustomer />
        </Col>


        <Col sm={9}>
          <Row>
            {customer.length > 0 ? (
              customer.map((cust) => (
                <Col sm={9} md={4} className="mb-4" >
                  <Card className="h-100 shadow-lg">
                    <Card.Img
                      variant="top"
                      src={cust.image} className="card-img-fixed" style={{ height: "300px" }} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{cust.vehicle_no}</Card.Title>
                      <Card.Text>
                        <h5>Contact:</h5> {cust.phone}
                      </Card.Text>
                      <div className='d-flex justify-content-around'>
                        <Link to={`/service/${cust.id}`} className="btn btn-outline-info   mt-auto">Services</Link>
                        <button className='btn btn-outline-danger ' onClick={() => { deleteData(cust.id) }}>Delete</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h5>No customers found</h5>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Customer;
