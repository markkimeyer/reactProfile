import React from "react";
import "./style.css";
import { Col, Row, Container } from "../components/Grid";

const Contact = () => {
    return (
        <Container fluid>
<header>
        <div class="row"></div>
        <div class="col-lg-12 separateborder">
            <h1>Contact</h1>
        </div>
    </header>
<div class = "contactMe">
        <div class="contactRow">
            <div class="col-md-5"></div>
            <div class="col-md-7">
            <button type="button" class="btn btn-secondary btn-lg" id = "resume">Resume  <i class="far fa-file"></i></button>
        </div>
        </div>
  
        <div class="contactRow">
            <div class="col-md-5"></div>
            <div class="col-md-7">
                <button type="button" class="btn btn-secondary btn-lg" id = "mailchimp">Contact Me  <i class="far fa-envelope"></i></button>
        </div>
        </div>
    
    <div class="contactRow">
        <div class="col-md-5"></div>
            <div class="col-md-7">
            <button type="button" class="btn btn-secondary btn-lg" id = "linkedin">Linked <i class="fab fa-linkedin"></i></button>
    </div>
    </div>

<div class="contactRow">
    <div class="col-md-5"></div>
            <div class="col-md-7">
        <button type="button" class="btn btn-secondary btn-lg" id = "github">GitHub <i class="fab fa-github"></i></button>
</div>
</div>
</div>
    
    </Container>

);
};

export default Contact;