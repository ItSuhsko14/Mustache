import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Contacts";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Коротко
              <br />
              <span className="purple"> ПРО МЕНЕ </span>
            </h1>
            <p className="home-about-body">
              Я займаюсь веб розробкою використовуючи
              <i>
                <b className="purple"> JavaScript, React, Node.js, MongoDB. </b>
              </i>
              <br />
              <br />
              Моя спеціалізація - сайти для івент індустрії, для ведучих,
              фотографів, агенцій. Також маю досвід в автоматизації харчових
              виробництв (ресторани, пекарні).
              <br />
              <br />Я знаходжусь в пошуку команди із сильною інженерною
              культурою для професійного розвитку в сфері розробки.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Мої соц. мережі</h1>
          <p>
            Завжди відкритий до <span className="purple">спілкування </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <Contacts />
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
