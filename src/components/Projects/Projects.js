import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zipcode from "../../assets/img3.png";
import calculator from "../../assets/img1.png";
import todo from "../../assets/img2.png";
import guide from "../../assets/img4.png";
import pokedex from "../../assets/pokedex.png";
import carrinhoCompras from "../../assets/carrinhoCompras.png";
import buzzfeed from "../../assets/readme1.png";
import search from "../../assets/redme.png";
import gamboa from "../../assets/gamboa.png";
import courses from "../../assets/courses.png";
import crudJS from "../../assets/crudJS.png";

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
              imgPath={gamboa}
              isBlog={false}
              title="Angular - Login, Dashboard and form to Gamboa Solutions"
              description="The project have been developed by me for Gamboa Solutions. Here you can find a  
              demonstration. To access the content about form and dashboard - that is in construction - the 
              email is 'lucas@gmail.com' and password is 'lucas'.
              "
              ghLink="https://github.com/Lucas-Gualberto94/gamboa-dashboard-form"
              demoLink="https://lucas-gualberto94.github.io/gamboa-dashboard-form/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courses}
              isBlog={false}
              title="Angular and Java (Spring) - CRUD using concepts about Java and Angular"
              description="A fully functional EXAMPLE CRUD written in Angular aand JAVA, .
              This project was built along with course taught by Loiane Groner on Youtube. 
              "
              ghLink="https://github.com/Lucas-Gualberto94/crud-angular"
              demoLink="https://lucas-gualberto94.github.io/crud-angular/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudJS}
              isBlog={false}
              title="JavaScript - CRUD"
              description="A CRUD written in vanilla JavaScript, testing my skills to 
              create, read, update and delete elements in a application. Access my personal 
              blog, there I explain how to build your own CRUD. 
              "
              ghLink="https://github.com/Lucas-Gualberto94/crud-JS?tab=readme-ov-file"
              demoLink="https://lucas-gualberto94.github.io/crud-JS/"              
            />
          </Col>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buzzfeed}
              isBlog={false}
              title="Angular - Buzzfeed about The Office series"
              description="A fully functional EXAMPLE project written in Angular showing its 
              main concepts. This project was built along with a Bootcamp offered 
              by digital innovation one (DIO) showing how to create construct a buzzfeed about which
              The Office personality most resembles yours.
              "
              ghLink="https://github.com/Lucas-Gualberto94/angular-buzzfeed"
              demoLink="https://lucas-gualberto94.github.io/angular-buzzfeed/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title="Angular - Search Pokemon"
              description="A fully functional EXAMPLE project written in Angular showing how 
              to work with HTTP requisitions. This project was built along with an Bootcamp offered 
              by digital innovation one (DIO) showing how to consume a HTTP requisition using Angular."
              ghLink="https://github.com/Lucas-Gualberto94/angular-pokemon"
              demoLink="https://lucas-gualberto94.github.io/angular-pokemon/"
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="This project is an example that was built along with a Bootcamp offered 
              by digital innovation one (DIO) showing how to create a Pokedex by consuming pokeApi 
              by fetch API"
              ghLink="https://github.com/Lucas-Gualberto94/Pokedex"
              demoLink="https://lucas-gualberto94.github.io/Pokedex/"              
            />
          </Col>

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guide}
              isBlog={false}
              title="react-guide"
              description="developing interface (not completed yet) through the course 'React - 
              The Complete Guide (incl Hooks, React Router, Redux)' by Maximilian 
              Schwarzmüller, avaliable on Udemy platform"
              ghLink="https://github.com/Lucas-Gualberto94/react-guide"
              demoLink="https://lucas-gualberto94.github.io/react-guide/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carrinhoCompras}
              isBlog={false}
              title="Carrinho de Compras"
              description="Project developed during the post gratudation at Descomplica"
              ghLink="https://github.com/Lucas-Gualberto94/carrinho_Compras"
              demoLink="https://lucas-gualberto94.github.io/carrinho_Compras/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
