import React from "react";
import "./style.css";
import { Col, Row, Container } from "../components/Grid";

const Contact = () => {
    return (
        <Container fluid>
<header>
        <Row>
        <div class="col-lg-12 separateborder">
            <h1>Contact</h1>
        </div>
        </Row>
    </header>
<div class = "contactMe">
        <div class="contactRow Row">
            <Col size="md-12">
            <a href = "https://drive.google.com/file/d/1iuBT4nv_iKdN_vfQtl9GczDmbSgFbcrt/view"><button type="button" class="btn btn-secondary btn-lg" id = "resume">Resume  <i class="far fa-file"></i></button>
            </a>
            </Col>
        </div>
  
        <div class="contactRow Row">
        <Col size="md-12">
        <a href = "https://us1.list-manage.com/contact-form?u=ab348f2b61785522dbd6bdd88&form_id=73c9c3b608e09594c381e853f8e5ce8d"> <button type="button" class="btn btn-secondary btn-lg" id = "mailchimp">Contact Me  <i class="far fa-envelope"></i></button>
               </a>
                </Col>
        </div>
    
    <div class="contactRow Row">
    <Col size="md-12">
    <a href ="https://www.linkedin.com/in/markkimeyer/" >
            <button type="button" class="btn btn-secondary btn-lg" id = "linkedin">Linked <i class="fab fa-linkedin"></i></button>
            </a>
            </Col>
    </div>

<div class="contactRow Row">
<Col size="md-12">
<a href ="https://github.com/markkimeyer">
        <button type="button" class="btn btn-secondary btn-lg" id = "github">GitHub <i class="fab fa-github"></i></button>
        </a>
        </Col>
</div>
</div>
    
    </Container>

);
};

export default Contact;