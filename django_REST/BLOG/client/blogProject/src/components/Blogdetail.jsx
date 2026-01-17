import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Comment from './Comment';
import { Addlikes, BlogDetails } from '../api/fetchApi';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function Blogdetail() {

    const [blog, setblogs] = useState({})
    const { id } = useParams()

    const header = {
        "Authorization": `token ${sessionStorage.getItem("token")}`,
        "Content-type": "application/json"
    }

    useEffect(() => {
        BlogDetails(id, header).then((res) => {
            console.log(res.data);
            setblogs(res.data)
            sessionStorage.setItem("blogId", res.data.id)
        })
    }, [])

    const blogLike = () => {
        Addlikes(id, header).then((res) => {
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

            <div className='d-flex justify-content-center align-items-center py-5 bg-light min-vh-100'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10 col-xl-8'>
                            <div className='card border-0 shadow-lg overflow-hidden'
                                style={{
                                    borderRadius: '1rem',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>

                                {/* Blog Image */}
                                <div className='position-relative' style={{ height: '400px', overflow: 'hidden' }}>
                                    <img
                                        src={blog.image}
                                        className='w-100 h-100 object-fit-cover'
                                        alt={blog.title}
                                        style={{
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div className='position-absolute top-0 end-0 m-3'>
                                        <span className='badge bg-primary bg-opacity-75 fs-6 p-2'>
                                            {blog.category || "Featured"}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className='card-body p-4 p-md-5'>
                                    {/* Title */}
                                    <h1 className='card-title display-6 fw-bold mb-3'
                                        style={{
                                            color: '#2c3e50',
                                            lineHeight: '1.3'
                                        }}>
                                        {blog.title}
                                    </h1>

                                    {/* Meta Information */}
                                    <div className='d-flex align-items-center mb-4'
                                        style={{
                                            borderBottom: '2px solid #f8f9fa',
                                            paddingBottom: '1rem'
                                        }}>
                                        <div className='d-flex align-items-center me-4'>
                                            <i className='fas fa-user-circle me-2' style={{ color: '#6c757d', fontSize: '1.2rem' }}></i>
                                            <span className='text-muted'>{blog.author || "Admin"}</span>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <i className='fas fa-calendar-alt me-2' style={{ color: '#6c757d', fontSize: '1.2rem' }}></i>
                                            <span className='text-muted'>{blog.date || new Date().toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Caption/Content */}
                                    <div className='mb-4'>
                                        <p className='card-text fs-5'
                                            style={{
                                                color: '#495057',
                                                lineHeight: '1.8',
                                                textAlign: 'justify'
                                            }}>
                                            {blog.caption}
                                        </p>
                                    </div>

                                    {/* Stats & Actions */}
                                    <div className='d-flex justify-content-between align-items-center pt-3 border-top'>
                                        {/* Like Section */}
                                        <div className='d-flex align-items-center'>
                                            <button
                                                className='btn btn-link p-0 border-0 text-decoration-none'
                                                onClick={blogLike}
                                                style={{
                                                    transition: 'all 0.2s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                                <i className="fa-solid fa-heart fs-3"
                                                    style={{
                                                        color: blog.isLiked ? "#dc3545" : "#e0e0e0",
                                                        cursor: "pointer",
                                                        transition: 'color 0.3s ease'
                                                    }}></i>
                                            </button>
                                            <span className='ms-2 fs-5 fw-semibold' style={{ color: '#495057' }}>
                                                {blog.likes_count || 0}
                                            </span>
                                        </div>

                                        {/* Comment Section */}
                                        <div className='d-flex align-items-center'>
                                          
                                            <Comment/>
                                        </div>

                                       
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogdetail