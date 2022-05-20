import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container} from "react-bootstrap";
import {FcOk} from "react-icons/fc";
import "./Program.css";

function Program () {

    return (<div className="whour" id="program">
    <Container className="whour-content">
      <h1>Program for beginners</h1>
      <ul className="need-list">
        <li className="techs">
          <FcOk />
          Soft skills
        </li>
        <li className="techs">
          <FcOk />
          Git/Github
        </li>
        <li className="techs">
          <FcOk />
          HTML/CSS
        </li>
        <li className="techs">
          <FcOk />
          Java Script
        </li>
      </ul>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScs03u3MQANBOWuUqMN7cnsnPIiSKz_Oqjw4D21f_rQbTP2bA/viewform?usp=sf_link" target="_blank" rel="noreferrer">
          <Button bsStyle="primary" size="lg" className="need-signup">Get started</Button>
        </a>
      </p>
    </Container>
  </div>)

}

export default Program;
