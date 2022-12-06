import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiVisualstudiocode,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {AiFillGithub,AiOutlineFire} from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com/"><SiVisualstudiocode /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://app.netlify.com/teams/umairajput/overview"><SiNetlify /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com/Umairajput"><AiFillGithub /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://firebase.google.com/?gclid=Cj0KCQiAyracBhDoARIsACGFcS5XVqXXIIAobjpXURBIProMJTPDcSF08WMMqm2s95iylJ03sMNKPaEaAjYREALw_wcB&gclsrc=aw.ds"><AiOutlineFire /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://dashboard.heroku.com/apps"><SiHeroku /></a>
      </Col>
    </Row>
  );
}

export default Toolstack;
