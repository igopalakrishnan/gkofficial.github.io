import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/photo.jpg';
import profile from '../../assets/myprofile.svg';
import './navbar.css';
import { Col, Row } from 'react-bootstrap';
import { FiLinkedin, FiInstagram, FiFacebook } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa'


/**
* @author
* @function Navbarcanvas
**/

const Navbarcanvas = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container className='navbar-container' fluid>
                <Navbar expand="md" className='navbar'>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <Image
                                src={logo}
                                width='50'
                                height='50'
                                roundedCircle />
                            <Navbar.Text className="Navbar-text d-none d-lg-inline-block">Gopalakrishnan</Navbar.Text></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <Image
                                        src={logo}
                                        width='50'
                                        height='50'
                                        roundedCircle />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="navlinks">
                                    <Nav.Link href="#deets">Home</Nav.Link>
                                    <Nav.Link href="#memes">
                                        Portfolio
                                    </Nav.Link>
                                    <Nav.Link href="#memes">
                                        Education
                                    </Nav.Link>
                                    <Nav.Link href="#memes">
                                        Technologies
                                    </Nav.Link>
                                    <Nav.Link href="#memes">
                                        Blog
                                    </Nav.Link>
                                </Nav>
                                <Nav>
                                    <button className='button-container'>Contact Me</button>
                                </Nav>

                            </Offcanvas.Body>
                        </Offcanvas>
                        <Navbar.Collapse id="navbarScroll" className="justify-content-end d-none d-lg-block">
                            <Nav>
                                <Nav.Link href="#deets">Home</Nav.Link>
                                <Nav.Link href="#memes">
                                    Portfolio
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    Education
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    Technologies
                                </Nav.Link>
                                <Nav.Link href="#memes">
                                    Blog
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <button className='button-container'>Contact Me</button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className='homepage-container mt-5'>
                    <Row>
                        <Col className='name-col mt-lg-5 p-md-5' sm={6}>
                            <Row className='mt-lg-5 p-lg-5 mx-lg-5'><h1><strong>Hello, I am</strong></h1>
                                <h1><strong>Gopalakrishnan</strong></h1>
                            </Row>
                            <Row  className='mx-lg-5 px-lg-5'>
                                <Col>
                                    <FaGithubAlt className='mx-2' size={28} />
                                    <FiLinkedin className='mx-1' size={27} />
                                    <FiFacebook className='mx-1' size={25} />
                                    <FiInstagram className='mx-1' size={25} />
                                </Col>
                                <Row>
                                    <Col className='pt-4'>
                                        <button className='button-container'>Contact Me</button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col className='py-5 my-lg-5'>
                            <Image 
                                src={profile}
                                width='100%'
                                height='100%' />
                        </Col>

                    </Row>
                </Container>
            </Container>

        </>
    )

}

export default Navbarcanvas;