import React from "react";
import { Col, Row, Container } from "../components/Grid";
import './style.css';
import project from "../Images/project-one.png";
import Card from "../components/Card";

const Gallery = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Gallery</h1>
                </Col>
                <Row>
                <Card>
                     <img src="" alt="project one screenshot" className="gallery"
                        id="project-one-live"></img>
                        <img src = "../"></img>
                        <div className="card-body">
                            <h5 className="card-title"><u>Project One: Recharge</u></h5>
                            <p className="card-text">An application to connect electric car owners with nearby charging
                            stations.</p>
                            <br></br>
                            <button id="project-one-repo">Repository <i class="fab fa-github"></i></button>
                        </div>
                        </Card>
                </Row>
                <Row>
                    {project}
                </Row>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
        </Row>
        </Container>
  );
};

export default Gallery;