import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Comment from './Comment';
import { Addlikes, BlogDetails } from '../api/fetchApi';
import { useParams } from 'react-router-dom';

function Blogdetail() {

    const [blog,setblogs]= useState({})
    const {id}=useParams()

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-type": "application/json"
    }

    useEffect(()=>{
        BlogDetails(id,header).then((res)=>{
            console.log(res.data);
            setblogs(res.data)
            sessionStorage.setItem("blogId",res.data.id)
        })
    },[])

    const blogLike=()=>{
        Addlikes(id,header).then((res)=>{
            console.log(res.data);
            toast('likes added')
            
        })
    }

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">READER HOME</Navbar.Brand>
                    <Nav className="me-auto">
                        <button className='btn btn-outline-info'>WRITER</button>
                    </Nav>
                </Container>
            </Navbar>

            <div className='d-flex justify-content-center align-items-center mt-3'>
                <div className='w-75 p-3 border shadow'>
                    <Card style={{ width: "100%" }}>
                        <Card.Img variant="top" src={blog.image} />
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Text>
                                {blog.caption}
                            </Card.Text>
                            <i class="fa-solid fa-heart" onClick={blogLike} style={{ color: " #ededed", cursor: "pointer" }}></i>
                            <span>{blog.likes_count}</span> &nbsp;&nbsp; &nbsp;&nbsp;
                            <Comment />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Blogdetail