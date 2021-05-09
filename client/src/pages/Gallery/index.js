import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import './style.css';
const Gallery = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1>Gallery</h1>
                </Col>
                <Row>
                <div class="card" style="width: 18rem;">
                    <img src="Images/gallery/project-one.png" alt="project one screenshot" class="gallery"
                        id="project-one-live"></img>
                        <div class="card-body">
                            <h5 class="card-title"><u>Project One: Recharge</u></h5>
                            <p class="card-text">An application to connect electric car owners with nearby charging
                            stations.</p>
                            <br></br>
                            <button id="project-one-repo">Repository <i class="fab fa-github"></i></button>
                        </div>
                        </div>
                </Row>
        </Row>
        </Container>
  );
};

export default Gallery;