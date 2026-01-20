import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Addblog from './Addblog';
import Createprofile from './Createprofile';
import { getUserData, listAllProfile, listUserBlog } from '../api/fetchApi';
import { Link } from 'react-router-dom';





function Writerhome() {
    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
    }



    const [listBlog, setListBlog] = useState([])
    const [profiles, setProfiles] = useState([])
    const [user, setUser] = useState({
        id: "", username: ""
    })

    useEffect(() => {
        listUserBlog(header).then((res) => {
            console.log(res.data);
            setListBlog(res.data)
        }).catch((res) => {
            console.log(res.data);
        })


        listAllProfile(header).then((res) => {
            console.log(res);
            setProfiles(res.data)
        })


        getUserData(header).then((res) => {
            console.log(res.data);
            setUser(res.data)
        })
    }, [])

    const isProfile = profiles.filter((res) => (res.user.id == user.id)).length > 0;
    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">WRITER HOME</Navbar.Brand>
                    <Nav className="mee-auto">
                        {
                            isProfile ? <Link to={`/user/profile/${user.id}`} className='btn btn-outline-primary'>View Profile</Link>
                                : <Createprofile />
                        }
                        <Addblog />
                    </Nav>
                </Container>
            </Navbar>

            <div className='mt-2 d-flex justify-content-start'>
                <Container className="mt-4 pb-5">
                    <Row className="g-4">
                        {listBlog.length > 0 ? (
                            listBlog.map((blog) => (
                                <Col xs={12} sm={6} md={4} lg={3}>
                                    <Card className="h-100 shadow">
                                        <Card.Img variant="top" src={`http://127.0.0.1:8000${blog.image}`} style={{ height: "250px", objectFit: "cover" }} />

                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>{blog.caption}</Card.Text>
                                            <Button variant="primary" className="mt-auto">
                                                View
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <h4 className="text-center">No Blogs for current user</h4>
                        )}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Writerhome