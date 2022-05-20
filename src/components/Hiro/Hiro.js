import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container} from "react-bootstrap";
import "./Hiro.css";

function Hiro () {
    return (<div className="hiro">
    <Container className="hiro-content">
      <h1>The one space for everybody</h1>
      <span className="under-header">
        We connect students, mentors and coaches!
      </span>
      <p className="hiden-p">
        No matter your location, financial condition or education
      </p>
      <p className="apply-button">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScs03u3MQANBOWuUqMN7cnsnPIiSKz_Oqjw4D21f_rQbTP2bA/viewform?usp=sf_link" target="_blank" rel="noreferrer">
        <Button bsStyle="primary" size="lg">Apply now</Button>
        </a>
      </p>
    </Container>
  </div>)

}

export default Hiro;
