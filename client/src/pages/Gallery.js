import React from "react";
import { Col, Row, Container } from "../components/Grid";
import './style.css';
import projectOne from "../Images/project-one.png";
import projectTwo from "../Images/projecttwo.jpg";
import projectThree from "../Images/projectthree.jpg";
import projectFour from "../Images/ParkPack.png"
import Card from "../components/Card";

const Gallery = () => {
    return (
        <Container fluid>
            <header>
            <Row>
                <Col size="md-12">
                    <h1>Gallery</h1>
                </Col>
                </Row>
                </header>
                <Row>
                <Card
                     image = {projectFour} 
                     alt= "project four screenshot"
                     live = "https://park-pack.herokuapp.com/"
                     title= "Project Two: Park Pack"
                     description = "Created by myself and four others, this app allows
                     users to create a user and dog profile, upload a picture, and view other users to create friendships. There is also
                     a built-in chat feature."
                    repo= "https://github.com/markkimeyer/park-pack"  
                        />
                <Card
                     image = {projectOne} 
                     alt= "project one screenshot"
                     live = "https://markkimeyer.github.io/RechargeCarApp/"
                     title= "Project One: Recharge"
                     description = "An application to connect electric car owners with nearby charging
                     stations. Myself and 3 others created this app using Ajax calls from several APIs "
                    repo= "https://github.com/markkimeyer/RechargeCarApp"  
                        />

<Card
                     image = {projectTwo} 
                     alt= "project one screenshot"
                     live = "https://markkimeyer.github.io/daily-planner/"
                     title= "Daily Planner"
                     description = "A web tool to help you schedule your work day. Always current with today's
                     date and time and time blocks are color-coded according to a state in the past, present, or
                     future."
                    repo= "https://github.com/markkimeyer/daily-planner"  
                        />
                        </Row>
                        <Row>
<Card
                     image = {projectThree} 
                     alt= "project one screenshot"
                     live = "https://markkimeyer.github.io/daily-planner/"
                     title= "Quiz Whiz"
                     description = "For all dog lovers-- a timed multiple choice quiz of different dog breeds."
                    repo= "https://github.com/markkimeyer/daily-planner"  
                        />
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