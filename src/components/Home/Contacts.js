import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram, FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <Container className="mt-4">
      <Row >
        <Col md={12}>
          <ul className="home-about-social-links d-flex flex-wrap justify-content-center">
            {/* <li className="social-icons">
              <a
                href="tel:+380676309342"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaPhone />
              </a>
            </li> */}

            <li className="social-icons">
              <a
                href="https://t.me/alutiy"
                target="_blank"
                
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
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
