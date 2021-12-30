import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import memories from "../../Assets/Projects/memories.png";
//import emotion from "../../Assets/Projects/emotion.jpeg";
import attendance from "../../Assets/Projects/attendance.png";
import chat from "../../Assets/Projects/chat.png";
//import suicide from "../../Assets/Projects/suicide.png";
import pizza from "../../Assets/Projects/pizza.png";

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
              imgPath={pizza}
              isBlog={false}
              title="Pizza Delivery"
              description="Pizza Delivery Application developed using React and React for Front End, Redux-Thunk for Asynchronous operations, Node JS for Runtime environment, Express JS for Backend Routing and Mongo DB for Database."
              link="https://github.com/Auxilia-vinnarasi/pizzaDeliverytask-Auxi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Attendance Management System"
              description="Attendance management web app to track students where they are, and note the attendance of students according to room No and download data of attendance for each day."
              link="https://github.com/Auxilia-vinnarasi/attendancemgmt-task1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories"
              description="Simple social media app that allows users to post interesting events that happened in their lives."
              link="https://github.com/Auxilia-vinnarasi/memories_project-frontend"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="Chat Room build with react.js and Node js.Send and receive messages using web sockets and Socket.io to make any real-time application."
              link="https://github.com/Auxilia-vinnarasi/chat-app-project-frontend"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
