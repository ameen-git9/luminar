import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllCustomer } from '../api/fetchApi';
import { Link } from 'react-router-dom';

function Customer() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getAllCustomer().then((res) => {
      console.log(res.data);
      setCustomer(res.data);
    });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
      
        <Col sm={3}>
          <Link to="/add-customer" className="btn btn-success mb-3">
            Add Customer
          </Link>
        </Col>

       
        <Col sm={9}>
          <Row>
            {customer.length > 0 ? (
              customer.map((cust) => (
                <Col sm={9} md={4} className="mb-4" >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={cust.image} className='mb-4'/>
                    <Card.Body>
                      <Card.Title>{cust.vehicle_no}</Card.Title>
                      <Card.Text>
                        <h5>Contact:</h5> {cust.phone}
                      </Card.Text>
                      <Link to={`/service/${cust.id}`} className="btn btn-primary w-100">
                        Services
                      </Link>
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
