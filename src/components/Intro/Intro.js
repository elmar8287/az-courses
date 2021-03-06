import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Container} from "react-bootstrap";
// Import * as Icon from 'react-bootstrap-icons';
import {FcApproval, FcCheckmark, FcSurvey} from "react-icons/fc";
import "./Intro.css";

function Intro () {

    return (<div className="intro" id="getstarted">
    <Container className="intro-content">
      <h1>Student</h1>
      <ul className="list-how-it-works">
        <li>
          <FcCheckmark />
          Are you a developer, looking for a mentor or
          a coach to prepare for a job searching? That is free!
        </li>
        <li>
          <FcSurvey />
          Apply
        </li>
        <li>
          <FcSurvey />
          Meet with our coordinator
        </li>
        <li>
          <FcApproval />
          Get started!
        </li>
      </ul>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScs03u3MQANBOWuUqMN7cnsnPIiSKz_Oqjw4D21f_rQbTP2bA/viewform?usp=sf_link" target="_blank" rel="noreferrer">
          <Button variant="success" size="lg" className="signup-succes">Apply</Button>
        </a>
      </p>
    </Container>
    <Container className="intro-content">
      <h1>Mentor</h1>
      <ul className="list-how-it-works">
        <li>
          <FcCheckmark />
          Do you intereseted to become a mentor? Do you feel confidence to
          mentoring beginer students?
        </li>
        <li>
          <FcSurvey />
          Apply
        </li>
        <li>
          <FcSurvey />
          Meet with our coordinator
        </li>
        <li>
          <FcApproval />
          Get started!
        </li>
      </ul>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScs03u3MQANBOWuUqMN7cnsnPIiSKz_Oqjw4D21f_rQbTP2bA/viewform?usp=sf_link" target="_blank" rel="noreferrer">
          <Button variant="success" size="lg" className="signup-succes">Apply</Button>
        </a>
      </p>
    </Container>
    <Container className="intro-content">
      <h1>Coach</h1>
      <ul className="list-how-it-works">
        <li>
          <FcCheckmark />
          Are you coach looking for getting expirience?
          Do you need a big space for implement you knowlidges?
        </li>
        <li>
          <FcSurvey />
          Apply
        </li>
        <li>
          <FcSurvey />
          Meet with our coordinator
        </li>
        <li>
          <FcApproval />
          Get started!
        </li>
      </ul>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScs03u3MQANBOWuUqMN7cnsnPIiSKz_Oqjw4D21f_rQbTP2bA/viewform?usp=sf_link" target="_blank" rel="noreferrer">
          <Button variant="success" size="lg" className="signup-succes">Apply</Button>
        </a>
      </p>
    </Container>
  </div>)

}

export default Intro;
