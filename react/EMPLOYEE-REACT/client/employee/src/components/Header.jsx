import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
      <Navbar className="bg" style={{backgroundColor:"#3ec1f5ff"}}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} className=' text-decoration-none'><i className="fa-etch fa-solid fa-user" style={{color:" #cce6ecff"}}></i>
           <span style={{color:"black", fontFamily: "monospace"}}> EMPLOYEE</span>
            </Link>
          </Navbar.Brand>
          <Link to={'add'} className='btn btn-warning'><i className="fa-solid fa-user-plus fa-bounce me-2"></i></Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header