import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
// import * as Icon from 'react-bootstrap-icons';
import { FcCheckmark, FcSurvey, FcApproval } from 'react-icons/fc';
import './Intro.css';

const Intro = () => (
  <div className="intro" id="benefits">
    <Container className="intro-content">
      <h1>How it works?</h1>
      <ul className="list-how-it-works">
        <li>
          <FcCheckmark />
          Signup
        </li>
        <li>
          <FcSurvey />
          Check your English level
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
        <Button variant="success" size="lg">Signup</Button>
      </p>
    </Container>
  </div>
);

export default Intro;
