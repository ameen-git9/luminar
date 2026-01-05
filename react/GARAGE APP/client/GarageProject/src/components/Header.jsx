import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand href="#home"><i class="fa-solid fa-car fa-beat-fade" style={{ color: " #3cec91" }}></i><span style={{ fontFamily: "-apple-system", padding: "14px" }}>GARAGE</span></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link className='nav-link' to={'/'} style={{ fontFamily: "-apple-system" }}>Home</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to={'Customer'} style={{ fontFamily: "-apple-system" }}>Customer</Link></Nav.Link>
                        <Nav.Link><Link className='nav-link' to={'Service'} style={{ fontFamily: "-apple-system" }}>services</Link></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header