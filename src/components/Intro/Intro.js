import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './Intro.css';

const Intro = () => (
  <div className='intro'>
    <Container className="intro-content">
      <h1>How it works?</h1>
      <ul>
        <li><Icon.MdFollowTheSigns />Signup</li>
        <li>Check your English level</li>
        <li>Get tested for technologies</li>
        <li>Get a least 70% of score</li>
        <li>And here you are!</li>
      </ul>
      <p>
        <Button variant="success" size="lg">Signup</Button>
      </p>
    </Container>
    <Container className="intro-content">
      <Icon.ArrowRight />
      <Icon.Box />
      <img scr="./" alt="test-score"/>
    </Container>
  </div>
);

export default Intro;
