import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import {Container, Row, Col} from "reactstrap";
import Summary from "../components/Summary";
import Wumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Skills from "../components/Skills";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Contact from "../components/Contact";
import Profile from "../components/Profile"
function Home() {
    return (
        <>
<Navbar />
    <Container>
        <Row>
            <Col>
                <Wumbotron />
            </Col>
        </Row>
        <Row>
            <Col>
            <Profile />
            </Col>
        </Row>
        <Row>
            <Col> 
            <Wrapper>
            <Section 
                id="skills" />
            <Skills />
            </Wrapper>
            </Col>

        </Row>

        <Row>
            <Col>
            <Section id="about"/>
                <Summary />
            </Col>
        </Row>
        <Wrapper >
        <br/>
        <br/>
        <br/>
        <Section id="portfolio" />
        <h1>Portfolio</h1>
        <hr/>
        {projects.map(project => <Project key={project.id} alt={project.alt} title={project.title} image={project.image} githubRepo={project.githubRepo} url={project.url} description={project.description} /> )}
        </Wrapper>
        <br/>
        <br/>
        <br/>
        <br/>
        <Wrapper>
            <Row>
                <Col>
                <Section id="contact" />
                <Contact />
                </Col>
            </Row>
        </Wrapper>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </Container>
    </>
    )
}

export default Home;