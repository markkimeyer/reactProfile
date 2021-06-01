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
                    I’m a 30-year-old vibrant female persuing a career-change to web development. I completed the Full Stack Coding Bootcamp through the University of Minnesota and graduated May 27,  2021. Besides web development, I enjoy trail running with my dog, cooking, snowboarding, and catching up on reality TV shows. 
                </p>
                <p>
                     I've been employed with the global newspaper company, Naviga, since February of 2014. I've had a few different roles throughout the years in both Support and Implementation. Earlier this year, I transitioned back to support when I was promoted to a Senior Support Analyst. 
                </p>
                <p>
                This recent role-change was made to assist the one other analyst that manages the Online Circulation Management Queue. This queue mainly contains salesforce cases reported by customers experiencing issues from use with our APIs. Using templated and custom HTML, CSS, and JavaScript, I help clients create and customize their online portals, which are used by both the newspaper's subscribers and carriers. This has been a great opportunity to gain relevant experience in the web development industry. 
                </p>

                <p>
                     The experience I have working with software web development combined with my new knowledge of the latest and greatest web development technologies has fully prepared me to seek new employment as full-stack developer. Please see the Projects page for examples of my work and <a style={{color:'darkcyan'}}href="/contact">contact me</a> with any questions or comments.
                </p>
                
                <br></br>
               <a href="/Gallery"><p id="skip-to-gallery">See my Projects             <i class="fas fa-arrow-right"></i></p> 
               </a></div>
            <br></br>
            <br></br>
            <br></br>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
