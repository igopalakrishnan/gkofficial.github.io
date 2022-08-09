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
            <Container>
                <Navbar expand="md">
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
                                <Button>Contact Me</Button>
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
                            <Button>Contact Me</Button>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                <Container className='homepage mt-5'>
                    <Row>
                    <Col className='name-col m-lg-5 p-md-5' sm={6}>
                            <h1><strong>Hello, I am</strong></h1>
                            <h1><strong>Gopalakrishnan</strong></h1>
                        </Col>
                        <Col>
                            <Image
                                src={profile}
                                width='100%'
                                height='100%'
                                rounded />
                        </Col>
                       
                    </Row>
                </Container>
            </Container>

        </>
    )

}

export default Navbarcanvas;