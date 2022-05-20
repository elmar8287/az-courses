import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import "./Features.css";
import {FcCheckmark} from "react-icons/fc";
import {BsFillArrowDownCircleFill} from "react-icons/bs";

function Features () {

    return (<div id="benefits">
    <h2 className="features-header">
      Benefits for beginners
      <BsFillArrowDownCircleFill className="down-icon"/>
    </h2>
    <div className="features">
      <Container className="features-content">
        <h2>Free of payment</h2>
        <p>
          Yes, you will not pay anything. We are giving the apportunity for everybody,
          no matter financial situation.
        </p>
        <FcCheckmark className="feature-check" />
      </Container>
      <Container className="features-content">
        <h2>Full online</h2>
        <p>
          Our bootcamp is fully online. All you need are pc and stabil intenet.
          Join your class from anywhere you found comfortable.
        </p>
        <FcCheckmark className="feature-check" />
      </Container>
      <Container className="features-content">
        <h2>Mentorship</h2>
        <p>
          We will provide you a mentor, who will support you on way to become a developer.
          You are not alone on this way!
        </p>
        <FcCheckmark className="feature-check" />
      </Container>
      <Container className="features-content">
        <h2>Community</h2>
        <p>
          You will be in a community of developers, which is a basic of remote colloborations
          and pair programming.
        </p>
        <FcCheckmark className="feature-check" />
      </Container>
    </div>
  </div>)

}

export default Features;
