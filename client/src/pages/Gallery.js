import React from "react";
import { Col, Row, Container } from "../components/Grid";
import './style.css';
import Card from "../components/Card";
import Skills from "../components/Skills";
import projects from "../data/projects";

const Gallery = () => {
    return (
        <Container fluid>
            <header>
            <Row>
                <Col size="md-12">
                    <h1>Projects and Apps</h1>
                </Col>
                </Row>
                </header>
                <Row>
                    {projects.map(project => ( <Card
                    //move images folder into public, no .. just filename.png/jpg"
                     image = {process.env.PUBLIC_URL+project.image} 
                     alt= {project.alt} 
                     live = {project.live} 
                     title= {project.title} 
                     description = {project.description} 
                    repo= {project.repo} 
                    tech= {project.tech}
                        />))}
               
                        </Row>
                        <Row>

                </Row>

                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
        </Container>
  );
};

export default Gallery;