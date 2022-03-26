import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import { ImLibrary } from 'react-icons/im';

const Header = () => (
  <>
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="./">
          <ImLibrary className="logo-icon" />
          AZ-Courses
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navsbar-nav">
          <Nav>
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="#benefits">Benefits</Nav.Link>
            <Nav.Link href="#whour">Who you are?</Nav.Link>
            <Nav.Link href="#">Program</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#" className="next-link">What is next?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
);

export default Header;
