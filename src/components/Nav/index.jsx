import { NavLink, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export default function index() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        expand='lg'
        className='navbar-custom w-100 text-white p-3'
        expanded={expanded}
        collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href='/' className='text-white'>
            Lateef Sanni
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='offcanvasNavbar'
            className='custom-toggle'
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton onClick={() => setExpanded(false)}>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                Lateef Sanni
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='mobile-body'>
              <Nav className='justify-content-end flex-grow-1'>
                <NavLink
                  onClick={() => setExpanded(false)}
                  to='/'
                  className='nav-link text-white'>
                  Home
                </NavLink>
                <NavLink
                  to='about'
                  onClick={() => setExpanded(false)}
                  className='nav-link text-white'>
                  About
                </NavLink>
                <NavLink
                  to='publications'
                  onClick={() => setExpanded(false)}
                  className='nav-link text-white'>
                  Publication
                </NavLink>
                <NavLink
                  to='contact'
                  onClick={() => setExpanded(false)}
                  className='nav-link text-white'>
                  Contact Me
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
