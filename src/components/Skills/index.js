import React from "react";
import {Row, Col} from "reactstrap";
import "./style.css"

function Skills() {

    return (
        <>
        <h1> Skills </h1>
        <hr/>
        <h5>Programming Languages & Tools</h5>
        <br/>
        <br/>
        <ul>
            <Row>
                <Col sm={12}>
        <i className="fas fa-terminal fa-6x icons"></i>{" "}<i className="fab fa-html5 fa-6x" alt="html5"></i>{" "}<i className="fab fa-css3-alt fa-6x" alt="css3"></i>{" "}<i className="fab fa-bootstrap fa-6x"></i>{" "}<i className="fab fa-js-square fa-6x" alt="javscript"></i>{" "}<i className="fab fa-node fa-6x" alt="nodejs"></i>{" "}<i className="fab fa-react fa-6x"></i>{" "}<i className="fab fa-github fa-6x"></i>{" "}<i className="fab fa-git fa-6x"></i>{" "}<i className="fab fa-gitlab fa-6x"></i>{" "}<img className="icons" src={process.env.PUBLIC_URL + "/assets/icons/jquery.png"}></img><img className="icons" src={process.env.PUBLIC_URL + "/assets/icons/mongodb.png"}></img><img className="icons" src={process.env.PUBLIC_URL + "/assets/icons/npm.png"}></img>{" "}<img className="icons" src={process.env.PUBLIC_URL + "/assets/icons/express.png"}></img>{" "}<img className="icons" src={process.env.PUBLIC_URL + "/assets/icons/sequelize.png"}></img>
          </Col>
        </Row>
        </ul>
        <br/>
       
        </>
    )

}


export default Skills;