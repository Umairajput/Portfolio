import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blockconsult from "../../Assets/Projects/blockconsult.jpeg";
import emotion from "../../Assets/Projects/instagram.jpeg";
import videoMatch from "../../Assets/Projects/videomatch.jpeg";
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
              imgPath={videoMatch}
              isBlog={false}
              title="Video Match"
              description="I have developed the UI for this video match and have also implemented some of its functionalities.its Login email or password is : videomatch@gmail.com ,videomatch$"
              ghLink=""
              demoLink="https://tal.videomatch.io/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockconsult}
              isBlog={false}
              title="Block Consult"
              description="This is a Block consult website, and I have also worked on it."
              ghLink="https://github.com/Neptunes-tech/blockconsult.git"
              demoLink="https://blockconsult.netlify.app/"
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
