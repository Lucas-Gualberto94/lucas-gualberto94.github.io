import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zipcode from "../../Assets/img3.png";
import calculator from "../../Assets/img1.png";
import todo from "../../Assets/img2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zipcode}
              isBlog={false}
              title="Brazil zip code finder"
              description="Here you can find any zip code in Brazil."
              ghLink="https://github.com/Lucas-Gualberto94/Buscador-cep"
              demoLink="https://lucas-gualberto94.github.io/Buscador-cep/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Calculator with vanilla JavaScript"
              ghLink="https://github.com/Lucas-Gualberto94/Calculator"
              demoLink="https://lucas-gualberto94.github.io/Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="to-do list"
              description="to do list with vanilla JavaScript"
              ghLink="https://github.com/Lucas-Gualberto94/Lista-de-tarefas"
              demoLink="https://lucas-gualberto94.github.io/Lista-de-tarefas/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
