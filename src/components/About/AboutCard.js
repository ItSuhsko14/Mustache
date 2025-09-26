import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Andriy Sushko. </span>
            I'm from <span className="purple">Ukraine, Dnipro.</span>
            <br />
            <br />
            I'm deeply enthusiastic about the modern technology, web development, industrial automation, online product
            growth, digital security, hardware, IoT and AI.
            <br />
            <br />
            I bring these passions to life working with great teams, on my own projects, and through mil-tech
            initiatives.
            <br />
            <br />
            Currently, I have the following projects: in the entertainment industry – "Luti"; in the restaurant sector –
            the mobile catering service "Luta Kukhnya"; and I provide web support for the volunteer initiative "Teplo na
            Peredovu".
            <br />
            <br />
            As for my hobbies, I am passionate about endurance sports, coffee, and books.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
