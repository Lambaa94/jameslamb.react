import React from "react";
import {Row, Col, Container} from "reactstrap";
import "./style.css"

function Skills() {

    return (
        <>
        <Container id="skills">
        <h1> Skills </h1>
        <hr/>
        <br/>
        <br/>
        <ul>
            <Row>
                <Col sm={12} >
        <i className="fas fa-terminal fa-6x icons m-3"></i>{" "}<i className="fab fa-html5 fa-6x m-3" alt="html5"></i>{" "}<i className="fab fa-css3-alt fa-6x m-3" alt="css3"></i>{" "}<i className="fab fa-bootstrap fa-6x m-3"></i>{" "}<i className="fab fa-js-square fa-6x m-3" alt="javscript"></i>{" "}<i className="fab fa-node fa-6x m-3" alt="nodejs"></i>{" "}<i className="fab fa-react fa-6x m-3"></i>{" "}<i className="fab fa-github fa-6x m-3"></i>{" "}<i className="fab fa-git fa-6x m-3"></i>{" "}<i className="fab fa-gitlab fa-6x m-3"></i>{" "}<img className="icons m-3" src={process.env.PUBLIC_URL + "/assets/icons/jquery.png"}></img><img className="icons m-3" src={process.env.PUBLIC_URL + "/assets/icons/mongodb.png"}></img><img className="icons m-3" src={process.env.PUBLIC_URL + "/assets/icons/npm.png"}></img>{" "}<img className="icons m-3" src={process.env.PUBLIC_URL + "/assets/icons/express.png"}></img>{" "}<img className="icons m-3" src={process.env.PUBLIC_URL + "/assets/icons/sequelize.png"}></img>
          </Col>
        </Row>
        
        </ul>
        </Container>
        <br/>
       
        </>
    )

}


export default Skills;