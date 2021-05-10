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
                    I’m a 30-year-old vibrant female persuing a career-change to web development. Currently I’m enrolled in the Full Stack Coding Bootcamp through the University of Minnesota. The program teaches the MERN stack and I’ll graduate in May 2021. When I’m not in class or studying, I enjoy trail running with my dog, cooking, snowboarding, or catching up on reality TV shows. 
                </p>
                <p>
                     By day, I’m a Senior Support Analyst for a global media software company, Naviga. I started with this company in February of 2014 as a Bilingual Support Analyst. I loved support because I was able to help clients resolve their issues (in both English and Spanish) but I still had a craving for making a bigger difference in the world. 
                    

                    In July 2015 I quit my job and moved to Costa Rica to volunteer as an English teacher at a small non-profit learning center. I fell in love with the children and adults who were bettering themselves each day by choosing to actively learn English with me. I also fell in love with the lush, green mountains and agricultural landscape of the small town I lived in. I stayed in Costa Rica until March 2020 when Covid-19 forced me back. 
                    
                </p>
                <p>
                    While living in Costa Rica, I was fortunate to regain my position with Naviga and worked part-time in support from December 2015-February 2020. Due to the diminishing newspaper industry, I was laid off, but thankfully only for a short 6-week period. I was able to rejoin the company full-time when a deal to merge two of the biggest newspaper companies in the US, Gannett and GateHouse, was signed in April 2020. In implemenation, I work with the clients to transfer their existing data into several new, consolidated databases. My duties mostly consist of translations of existing setup to a standardized setup that can easily be sustained by a centralized team. The processs is complicated and a new situation for all involved, but results in a more efficient and standardized database that will require less upkeep in the long run. 
                </p>
                <p>
                I recently transitioned into a new support role where I am one of two analysts managing the Online Circulation Management Queue, which is designed for customer issues that arise when using APIs. Using templated and custom HTML, CSS, and JavaScript, I help clients create and customize their online portals used by the newspaper's customers and carriers. This has been a great opportunity to gain relevant experience in the web development industry. 
                </p>

                <p>
                     Upon graduating the coding bootcamp in May 2021, I'll have new knowledge about website development that I can use with my existing knowledge of software development. This will allow me to be fully prepared to seek new employment as full-stack developer for a software company, or otherwise. Regardless of where I find myself after the bootcamp, I'll always keep striving to make a positive impact and help others do the same. 
                </p>
                <h2>Pura Vida!</h2>
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
