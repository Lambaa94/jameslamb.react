import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css"
import "animate.css"


const Wumbotron = () => {
  return (
    <div>
      <br/>  
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Jumbotron fluid id="jumbo">
        <Container fluid>
          <h1 id="name" className="animate_animated animate__bounce">James Lamb</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <h3 id="title" className="lead">Web Developer</h3>
        </Container>
      </Jumbotron>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
    </div>
    
  );
};

export default Wumbotron;

