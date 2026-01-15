import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Addblog from './Addblog';
import Createprofile from './Createprofile';

function Writerhome() {
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">WRITER</Navbar.Brand>
          <Nav className=" m-2">
            <Addblog/>
            <Createprofile/>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Writerhome