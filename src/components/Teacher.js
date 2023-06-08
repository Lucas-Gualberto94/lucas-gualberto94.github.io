import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { Button } from "react-bootstrap";

function Teacher() {
  return (
    <section className="resume-section">
      <div>
        <h2>Teacher</h2>
        <p>This section I will share the material create by me about Physics and English</p>
        <Button className="me-5" variant="danger" href="#" size="lg">
          <MdCastForEducation /> Phisics
        </Button>
        <Button variant="success" href="https://lucas-gualberto94.github.io/english-grammar/" size="lg">
          <MdCastForEducation /> English
        </Button>

      </div>

    </section>
  );
}

export default Teacher;
