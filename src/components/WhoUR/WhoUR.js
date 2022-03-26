import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { FcOk } from 'react-icons/fc';
import './Whour.css';

const Whour = () => (
  <div className="whour" id="whour">
    <Container className="whour-content">
      <h1>Who you are?</h1>
      <ul className="need-list">
        <li>
          <FcOk />
          A student or just graduated</li>
        <li>
          <FcOk />
          A beginer in a software engineering
        </li>
        <li>
          <FcOk />
          A developer with low expirience
        </li>
        <li>
          <FcOk />
          Just changing a sphere to IT
        </li>
      </ul>
      <p className="add-needs">... additionally:</p>
      <ul className="need-list">
        <li>
          <FcOk />
          fast learner
        </li>
        <li>
          <FcOk />
          highly motivated
        </li>
        <li>
          <FcOk />
          responsible
        </li>
        <li>
          <FcOk />
          self-confident
        </li>
      </ul>
      <p>
        <Button bsStyle="primary" size="lg" className="need-signup">Signup now</Button>
      </p>
    </Container>
  </div>
);

export default Whour;
