import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/../Assets/curriculo.pdf";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <p style={{ textAlign: "justify", margin: "20px" }}>
            Hi Everyone, I am <span className="purple">Lucas Gualberto </span>
            from <span className="purple"> São Paulo, Brazil. </span>
            I´ve been living in Galway - Ireland since 2022.
            <br />I am a front-end developer with <span className="purple"> master's degree
            </span> in Physics from the Inter-unit Science Teaching Program at University of 
            São Paulo (PIEC- USP). A fast learner with good communication skills. My current 
            passion is to develop websites and blogs. In my master I worked with data analysis 
            using R language. Nowaday I´ve studied JavaScript using React as a framework.
            <br/>
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs about Science, Tech and Education
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
