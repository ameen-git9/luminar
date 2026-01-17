import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { listAllBlogs } from '../api/fetchApi';
import { Link } from 'react-router-dom';



function Readerhome() {

    const [blogs, setBlogs] = useState([])

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-type": "application/json"


    }

    useEffect(() => {
        listAllBlogs(header).then((res) => {
            console.log(res.data);
            setBlogs(res.data)

        })
    }, [])


    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">READER HOME</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to={'/profile/list'} className='btn btn-outline-info'>WRITER</Link>
                    </Nav>
                </Container>
            </Navbar>




            <Row>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Col md={4} className="mb-4 d-flex" key={blog.id}>
                            <Card className="h-100 w-100 shadow">
                                <Card.Img variant="top" src={blog.image} style={{ height: "220px",objectFit: "cover", }}/>

                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="flex-grow-1">
                                        {blog.title}
                                    </Card.Title>

                                    <Link to={`/blog/${blog.id}`} className="btn btn-outline-primary">
                                        Read
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <h5>No blogs</h5>
                )}
            </Row>

        </div>
    )
}

export default Readerhome