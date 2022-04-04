import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container} from "react-bootstrap";
import {FcOk} from "react-icons/fc";
import "./Program.css";

function Program () {

    return (<div className="whour" id="program">
    <Container className="whour-content">
      <h1>Program for students</h1>
      <ul className="need-list">
        <li>
          <FcOk />
          Git/Github
        </li>
        <li>
          <FcOk />
          HTML
        </li>
        <li>
          <FcOk />
          CSS
        </li>
        <li>
          <FcOk />
          JS
        </li>
      </ul>
      <p className="add-needs">... additionally basics for:</p>
      <ul className="need-list">
        <li>
          <FcOk />
          React
        </li>
        <li>
          <FcOk />
          Data bases
        </li>
        <li>
          <FcOk />
          OOP
        </li>
        <li>
          <FcOk />
          Soft skills
        </li>
      </ul>
      <p>
        <Button bsStyle="primary" size="lg" className="need-signup">Signup now</Button>
      </p>
    </Container>
  </div>)

}

export default Program;
