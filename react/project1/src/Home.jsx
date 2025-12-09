import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Home() {
    const [numbers, setNumbers] = useState({
        num1: '', num2: ''
    })


    function findSum() {
        console.log(Number(numbers.num1) + Number(numbers.num2));


    }
    console.log(numbers);

    return (
        <div>
            <Container >
                <Row>
                    <Col className='bg-success'>1 of 2</Col>
                    <Col className='bg-info'>2 of 2</Col>
                </Row>
            </Container>

            <hr />
            <input type="text" placeholder='First no' onChange={(e) => (setNumbers({ ...numbers, num1: e.target.value }))} />
            <input type="text" placeholder='Second no' onChange={(e) => (setNumbers({ ...numbers, num2: e.target.value }))} />
            <button className='btn btn-primary' onClick={findSum}>Sum</button>


        </div>



    )
}

export default Home