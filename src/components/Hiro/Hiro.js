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
        <Button bsStyle="primary" size="lg">Apply now</Button>
      </p>
    </Container>
  </div>)

}

export default Hiro;
