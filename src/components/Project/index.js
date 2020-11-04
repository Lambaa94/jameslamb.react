import React from "react";
import {Col, Row, Container} from "reactstrap";
import "./style.css"



function Project(props) {



    return (
        <Container>
            
        <Row>
            <Col>
            <div>
                <a href={props.url}><img src={props.image} alt={props.alt} className="responsive"></img></a>
            </div>
            </Col>
            <Col>
    <h2>{props.title}</h2>
    <br />
    <br />
        <Row>
            <Col>
    <h5>{props.description}</h5>
    <br />
    <br />
            </Col>
        </Row>
                


        <Row>
            <Col>
            <a target="_blank" href={props.githubRepo}><button className="repoBtn">To the Repo</button></a>
            </Col>
            <Col>
            <a target="_blank" href={props.url}>
            <button className="linkBtn">To The App</button>
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