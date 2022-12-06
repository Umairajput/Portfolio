import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5,AiFillFire } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiAntdesign,SiMaterialui,SiFirebase } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://html.com/"><AiOutlineHtml5 /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://css.com/"><DiCss3/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://getbootstrap.com/"><TbBrandBootstrap/></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.javascript.com/"><DiJavascript1 /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://reactjs.org/"><DiReact /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://firebase.google.com/?gclid=Cj0KCQiAyracBhDoARIsACGFcS78bp5movQWWGiiVHdAfkd4Fn1YOEv6uQd0xSiYK7GPJCoG1XidbKMaAuQhEALw_wcB&gclsrc=aw.ds"><SiFirebase /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <a href="https://ant.design/"><SiAntdesign /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://mui.com/"><SiMaterialui /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/en/"><DiNodejs /></a>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://cloud.mongodb.com/v2/6385d5198a780053ad2106d1#clusters"><DiMongodb /></a>
      </Col>
    </Row>
  );
}

export default Techstack;
