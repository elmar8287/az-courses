import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import './Hiro.css';

const Hiro = () => (
  <div className="hiro">
    <Container className="hiro-content">
      <h1>Become a software developer!</h1>
      <p>
        No matter your location, financial condition and education
      </p>
      <p>
        <Button bsStyle="primary" size="lg">Apply now</Button>
      </p>
    </Container>
  </div>
);

export default Hiro;
