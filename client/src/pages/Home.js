import React from "react";
import { Col, Row, Container } from "../components/Grid";
import './style.css';
import me from "../Images/headshot.jpeg";
import Headshot from "../components/Headshot";

const Home = () => {
  return (
    <Container fluid>
      <header>
      <Row>
        <h1>About Me</h1>
      </Row>
      </header>
      <Row>
        <Col size="md-12">
         <Headshot
          image = {me}
        />
        <div id="aboutRow">
          <p id = "aboutp">
                    I’m a 30-year-old vibrant female persuing a career-change to web development. Currently I’m enrolled in the Full Stack Coding Bootcamp through the University of Minnesota with a graduation date of May 27,  2021. When I’m not in class or studying, I enjoy trail running with my dog, cooking, snowboarding, or catching up on reality TV shows. 
                </p>
                <p>
                     I've been employed with the global newspaper company, Naviga, since February of 2014. I've had few roles throughout the years in both Support and Implementation. Earlier this year, I transitioned back to support when I was promoted to a Senior Support Analyst. 
                </p>
                <p>
                This recent role-change was made to assist the one analyst that was managing the Online Circulation Management Queue. This queue mainly contains salesforce cases reported by customers experiencing issues from use with our APIs. Using templated and custom HTML, CSS, and JavaScript, I help clients create and customize their online portals used by the newspaper's subscribers and carriers. This has been a great opportunity to gain relevant experience in the web development industry. 
                </p>

                <p>
                     Upon graduating the coding bootcamp in May 2021, I'll have new knowledge about website development that I can use with my existing knowledge of software development. This will allow me to be fully prepared to seek new employment as full-stack developer for a software company, or otherwise. Regardless of where I find myself after the bootcamp, I'll always keep striving to make a positive impact and help others do the same. 
                </p>
                <h3>Thanks for visiting my page!</h3>
                <br></br>
                </div>
            <br></br>
            <br></br>
            <br></br>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
