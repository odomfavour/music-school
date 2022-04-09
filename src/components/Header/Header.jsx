import React, { useState } from 'react';
import './header.css'
// import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import RegistrationModal from '../RegistrationModal/RegistrationModal';
import logo from '../../images/logo.jpeg';

const Header = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 10){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <Navbar expand="lg" fixed="top"  className={colorChange ? 'topbar_inner py-3' : 'topbar_inner py-3'}>
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="brand logo" className='img-fluid'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#hero-section">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#instruments">Instruments</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <li className="nav-item">
                            <button className="btn btn-primary nav-link" onClick={handleShow}>Register</button>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <RegistrationModal show={show} handleClose={handleClose} />
        </Navbar>
    );
};

export default Header;