import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Contacts from "./Contacts";
import About from "./../About/About"
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-about-social">
              <Contacts />
            </Col>
          </Row>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Вітаю!  {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                 👋
                </span>
              </h1>
              <h1 className="heading-name">

                Я <strong className="main-name"> Сушко Андрій</strong>
                <br />
                <h2>
                  front-end React developer
              </h2>
              </h1>
              


              <div style={{ 
                            padding: 50, 
                            textAlign: "left",
                            paddingBottom: 50                          
                          }}>
                <Type />
              </div>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
