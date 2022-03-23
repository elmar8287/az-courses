import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
// import * as Icon from 'react-bootstrap-icons';
import { FcCheckmark, FcSurvey, FcApproval } from 'react-icons/fc';

import './Intro.css';

const Intro = () => (
  <div className="intro">
    <Container className="intro-content">
      <h1>How it works?</h1>
      <ul className="list-how-it-works">
        <li>
          <FcCheckmark />
         Signup</li>
        <li>
          <FcSurvey /> Check your English level</li>
        <li>
          <FcSurvey />
         Get tested for technologies</li>
        <li>
          <FcApproval />
         Get a least 70% of score</li>
      </ul>
      <p>
        <Button variant="success" size="lg">Get started</Button>
      </p>
    </Container>
    <Container className="intro-content">
      <img scr="./" alt="test-score" />
    </Container>
  </div>
);

export default Intro;
