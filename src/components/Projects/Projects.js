import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import musicApp from "../../Assets/Projects/music_app.jpeg";
import emotion from "../../Assets/Projects/instagram.jpeg";
import drag_and_drop_todo_app from "../../Assets/Projects/drag_and_drop_todo_app.jpeg";
import ulsStore from "../../Assets/Projects/uls-store.jpeg";
import quizApp from "../../Assets/Projects/quiz_app.jpeg";
import adminPannel from "../../Assets/Projects/admin-pannel.jpeg";

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
              imgPath={ulsStore}
              isBlog={false}
              title="ULS STORE"
              description="This is a ULS store, and I have also worked on it."
              ghLink="https://github.com/Neptunes-tech/wbmstore-webapp"
              demoLink="https://winbig-money.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminPannel}
              isBlog={false}
              title="ULS Admin Pannel"
              description="This is admin pannel, recently i'm working on this project its Login email or password is : manager@gmail.com ,manager"
              ghLink="https://github.com/Neptunes-tech/wbm-admin-backend"
              demoLink="https://wbm-dashboard.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drag_and_drop_todo_app}
              isBlog={false}
              title="Video Match"
              description="I made this todo app which is fully functional and drag and drop."
              ghLink="https://github.com/Umairajput/Drag-And-Drop-Todo-App"
              demoLink="https://tal.videomatch.io/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicApp}
              isBlog={false}
              title="Music App"
              description="I have created this music app that is both visually appealing and responsive."
              ghLink="https://github.com/Umairajput/Music-App"
              demoLink="https://music-webb.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizApp}
              isBlog={false}
              title="Quiz App"
              description="I have created this quiz app which is functional and responsive and the design is also quite good.."
              ghLink="https://github.com/Umairajput/Quiz-app-2"
              demoLink="https://quiizz-appp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Instagram Ui"
              description="I have created this Instagram UI which is fully responsive and looks good too."
              ghLink="https://github.com/Umairajput/Instagram-Ui"
              demoLink="https://instagramm-web.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
