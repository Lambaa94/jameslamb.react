import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import {Container, Row, Col} from "reactstrap";
import Summary from "../components/Summary";
import Wumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Skills from "../components/Skills";

function Home() {
    return (
    <Container>
        <Row>
            <Col>
                <Wumbotron />
            </Col>
        </Row>
        <Row>
            <Col> 
                <Skills />
            </Col>

        </Row>

        <Row>
            <Col>
                <Summary/>
            </Col>
        </Row>
        <Wrapper>
        <br/>
        <br/>
        <br/>
        <h1>Portfolio</h1>
        <hr/>
        {projects.map(project => <Project key={project.id} alt={project.alt} title={project.title} image={project.image} githubRepo={project.githubRepo} url={project.url} description={project.description} /> )}
        </Wrapper>
        <br/>
        <br/>
    </Container>
    
    )
}

export default Home;