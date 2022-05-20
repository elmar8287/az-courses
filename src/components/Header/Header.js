import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar} from "react-bootstrap";
import "./Header.css";
import {ImLibrary} from "react-icons/im";

function Header () {

    return (<>
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
            <Nav.Link href="#getstarted">Get started</Nav.Link>
            <Nav.Link href="#benefits">Benefits</Nav.Link>
            <Nav.Link href="#program">Program</Nav.Link>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScs03u3MQANBOWuUqMN7cnsnPIiSKz_Oqjw4D21f_rQbTP2bA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="next-link">Apply now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>)

}

export default Header;
