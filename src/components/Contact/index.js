import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.css"
function Contact() {

    return (
        
        <Container >
        <h4 id="contactTitle" >Contact Me</h4>
        <hr/>
        <br/>
        <br/>
        <Row >
            <Col>  
         <a className="bottomIcons" id="resume" href="https://docs.google.com/document/d/1derMmx3P5p19w2RurNWZ1ZBbOSWU_UeQ7tJfaZKu0Os/export?format=pdf" style={{color: 'darkCyan'}}><i className="fas fa-file-pdf fa-8x m-3"></i></a>
        
            </Col>
            <Col>
            <a href="tel:+1-646-853-1534"><i className="fas fa-mobile fa-8x bottomIcons m-3"></i></a> 
            </Col>
            <Col>
            <a className="bottomIcons" href="https://github.com/Lambaa94" target="_blank"> <i className="fab fa-github-square fa-8x m-3"></i></a>
            </Col>
            <Col>
            <a className="bottomIcons" href="mailto:jameslamb13@gmail.com"> <i className="fas fa-envelope-square fa-8x m-3"></i></a>
            </Col>
            </Row >
            <br/>
            <br/>
            <hr/>
            <h5 id="phone" >(646)-853-1534</h5>
            </Container>
       
    )
}


export default Contact;