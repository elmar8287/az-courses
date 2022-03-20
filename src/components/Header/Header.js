import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
  <>
  <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">AZ-Courses</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navsbar-nav'>
    <Nav>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
);

export default Header;
