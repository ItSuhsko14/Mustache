import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sicheslavski from "../../Assets/Projects/sicheslavski-sm.png";
import chef from "../../Assets/Projects/chefassistant-sm.png";
import allur from "../../Assets/Projects/allur-sm.png";
import mustdev from "../../Assets/Projects/mustdev-sm.png";
import kazaki from "../../Assets/Projects/kazaki-sm.png";
import kozaky from "../../Assets/Projects/kozaky-sm.png";
import doroshenko from "../../Assets/Projects/doroshenko-sm.png";
import litvin from "../../Assets/Projects/dimalitvin.png";
import litvinsm from "../../Assets/Projects/dimalitvin-sm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Мої останні <strong className="purple">роботи</strong>
        </h1>
        <p style={{ color: "white" }}>Ось деякі з проектів, які я виконував.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={litvin}
              isBlog={false}
              title="Фотограф Діма Літвін"
              description="Сайт для презентації послуг весільного фотографа. Технології: HTML, CSS, JavaScript, JQuery, Lightgallery. "
              ghLink="https://github.com/ItSuhsko14/photographer"
              demoLink="https://www.photograph-site.pp.ua/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doroshenko}
              isBlog={false}
              title="Ведучий Олександр Дорошенко"
              description="Сайт для презентації послуг ведучого свят Олександра Дорошенка. Технології: HTML, CSS, Javascript, Bootstrap."
              ghLink="https://github.com/ItSuhsko14/doroshenko"
              demoLink="https://www.adoroshenko.pp.ua/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kozaky}
              isBlog={false}
              title="Kozaky.com.ua"
              description="Інформаційний портал, який збирає різноманітну інформацію, каталог послуг, джерел на тему козацтва. Різні частини створено із використанням різного набору технологій таких, як html, css, javascript, php, react, express."
              ghLink="https://github.com/ItSuhsko14/Kozaky.com.ua"
              demoLink="http://kozaky.com.ua/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sicheslavski}
              isBlog={false}
              title="Sicheslavski.com.ua"
              description="Сайт громадської організації, яка займаєтсья культурно-просвітницької діяльністю. Створений на фреймворку Next.js з використанням статичної генерації"
              ghLink="https://github.com/ItSuhsko14/sicheslavski-static"
              demoLink="https://sicheslavski.kozaky.com.ua/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allur}
              isBlog={false}
              title="Кінний клуб Аллюр"
              description="Сайт кінного клуба Аллюр. Презентує кінний клуб, інформацію про основні послуги і контакти. Створено за допомогою препроцессорів pug.js та scss та фреймворку Bootsrap"
              ghLink="https://github.com/ItSuhsko14/MyAllur"
              demoLink="https://allur-self.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kazaki}
              isBlog={false}
              title="Kazak.zp.ua"
              description="Багатосторінковий сайт творчого колектива з презентацією послуг на розгалуженому дереві сторінок, фотогалереєю та блогом. Створений на html, css. Для шаблонізації використовується php."
              ghLink="https://github.com/ItSuhsko14/kazak"
              demoLink="https://github.io/kazak"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chef}
              isBlog={false}
              title="Chef assistant"
              description="Односторінковий веб додаток призначений для автоматизації роботи в ресторані або іншому харчовому виробництві. Дозволяє вводити базу технологічних карт і швидко перераховувати калькуляції відповідно до різного об'єму готової продукції. Створено на стеку MERN (MondoDB, Express.js, React, Node.js"
              ghLink="https://github.com/ItSuhsko14/ChefAssistant"
              demoLink="https://chefassistant.pp.ua"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mustdev}
              isBlog={false}
              title="Mustdev.pp.ua"
              description="Лендінг пейдж агенції з веб розробки. Презентація послуг, приклади робіт, ціни. Створено за допомогою React, з деплоєм на Vercel."
              ghLink="https://github.com/ItSuhsko14/webdevlanding"
              demoLink="https://webdevlanding-jzjzz23hv-itsuhsko14.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
