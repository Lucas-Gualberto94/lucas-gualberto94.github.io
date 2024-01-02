import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  
} from "react-icons/di";
import {
  SiR,
  SiTypescript
} from "react-icons/si";
import { 
  FaAngular,
  FaJava 
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>
    </Row>
  );
}

export default Techstack;
