import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import './navbar.css';

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
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
                            width='50'
                            height='50'
                            roundedCircle />
                        <Navbar.Text className="Navbar-text d-none d-lg-inline-block">Gopalakrishnan</Navbar.Text></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
                    <Offcanvas show={show} onHide={handleClose} placement='end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <Image
                                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
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
            </Container>

        </>
    )

}

export default Navbarcanvas;