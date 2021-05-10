import React from "react";
import { Col, Row } from "../Grid";
import './style.css';

const Footer = () => {
    return (

        <footer>
            {/* <Row>
                <Col size = "md-12">
            <p style = {{color : "peru", fontFamily: "nunito"}}>markkimeyer@gmail.com</p>
            </Col>
            </Row> */}
            <Row>
            <Col size = "md-12">
                    <a href="https://www.linkedin.com/in/markkimeyer"> <i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/markkimeyer?tab=repositories"> <i class="fab fa-github"></i></a>
                </Col>
            </Row>

        </footer>
    );
};

export default Footer;