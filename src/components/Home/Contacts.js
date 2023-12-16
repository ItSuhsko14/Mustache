import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone, FaTelegram, FaEnvelope } from "react-icons/fa";

function Contacts() {
    return (
        <Row>
          <Col md={12}>
            
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="tel:+380676309342"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                    <FaPhone />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://t.me/alutiy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                    <FaTelegram />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:itsushkoandriy@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                    <FaEnvelope />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/ItSuhsko14"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/andriysushko/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mustache.development"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    )
}

export default Contacts;