import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/curriculo.pdf";


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
            <br />I am studying a postgraduate degree in full-stack development. I also have a 
            <span className="purple"> master's degree</span> in Physics at University of São Paulo (<span className="purple">PIEC- USP</span>). 
            I lived in <span className="purple">Ireland for two years</span> in order to improve my English (2022-2023). A fast learner with good 
            communication skills. My current passion is to develop websites and blogs. In my master 
            I worked with data analysis using R language. Nowaday I´ve studied JavaScript and Java.
            <br/>
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs about Science, Technology and Education
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
