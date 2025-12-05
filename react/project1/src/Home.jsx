import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    return (
        <div>
            <Container >
                <Row>
                    <Col className='bg-success'>1 of 2</Col>
                    <Col className='bg-info'>2 of 2</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home