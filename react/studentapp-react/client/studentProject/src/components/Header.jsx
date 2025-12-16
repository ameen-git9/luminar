import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="#home">
           <i class="fa-solid fa-people-group"></i>
            STUDENT MANAGEMENT
          </Navbar.Brand>
          <Link to={'add'} className='btn btn-warning'>Add student</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header