import React from "react";
import {Col, Row, Container} from "reactstrap";
import "./style.css"


function Project(props) {


//     handleLinkClick = event => {
//     event.preventDefault();
// }

//     handleRepoClick = event => {
//     event.preventDefault();

//     }

   
    return (
        <Container>
            
        <Row>
            <Col>
            <div>
                <a href={props.url}><img src={props.image} alt={props.alt}></img></a>
            </div>
            </Col>
            <Col>
    <h2>{props.title}</h2>
    <br />
    <br />
            <Row>
            <button onClick={() => this.handleBtnClick} className="repoBtn" src={props.githubRepo}>To the Repo</button> <button className="linkBtn">To The App</button>
            </Row>
            </Col>
        </Row>
       
        <br />
        <hr/>
        </Container>
    )
}


export default Project