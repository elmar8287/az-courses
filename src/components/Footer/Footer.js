import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-rights">
          <h4>----</h4>
          <ul className="footer-address">
            <li>--</li>
            <li>--</li>
            <li>--</li>
          </ul>
          <ul className="footer-icons">
            <li><FaFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaWhatsapp /></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
            <a href="#about">Benefits</a>
            </li>
            <li>
            <a href="#cars">Program</a>
            </li>
            <li>
            <a href="#contact">Get started</a>
            </li>
          </ul>
          <h5 className="footer-copy-rights">&copy; 2022 Copyright: AZ-courses</h5>
          <a href="https://github.com/elmar8287" target="__blank" className="elmar-link">by Elmar Abdulkarimov</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
