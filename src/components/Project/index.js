import React from "react";
import {Col, Row, Container, Button} from "reactstrap";
import "./style.css"



function Project(props) {



    return (
        <Container>
            
        <Row>
            <Col>
            <div>
                <a target="_blank" href={props.url}><img src={props.image} alt={props.alt} className="responsive"></img></a>
            </div>
            </Col>
            <Col>
    <h2>{props.title}</h2>
    <br/>
        <Row>
            <Col>
    <p id="fontChange">{props.description}</p>
    <br />
    <br />
            </Col>
        </Row>
                


        <Row>
            <Col>
            <a target="_blank" href={props.githubRepo}><Button color="info" className="repoBtn">To the Repo</Button></a>
            </Col>
            <Col>
            <a target="_blank" href={props.url}>
            <Button color="success" className="linkBtn">To The App</Button>
            </a>
            </Col>
        </Row>
        </Col>
    </Row>
       
        <br />
        <hr/>
        </Container>
    )
}


export default Project