import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Auxilia Vinnarasi </span>
            from <span className="purple">Chennai, India.</span>
            <br />Hardworking and passionate job seeker with strong organizational skills eager to
        secure entry-level full stack developer position in IT environment. Ready to help team
        achieve company goals.
        Recent Full Stack developer with the passion for developing scalable web
        applications and working across the full stack.
        Ready to learn new technologies and willing to work on advanced techstack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Stitching
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing 
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
