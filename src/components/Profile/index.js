import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import "./style.css";

function Profile() {
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
      <Jumbotron fluid id="profile">
        <Container fluid>
        <Row>
<Col>
<img className="responsiveProfile" id="profilePic" src={process.env.PUBLIC_URL + "/assets/images/IMG_5807.jpeg"}></img>
<br/>
<br/>
</Col>
<Col>
<br/>
<br/>
<br/>
<i class="fas fa-city fa-3x"><h3>Living in New York City</h3></i>
<br/>
<br/>
<br/>
<br/>
<br/>
<Row>
<Col>
<i class="fas fa-code fa-3x"><h3>MERN Language Stack</h3></i>
</Col>
</Row>
<br/>
<br/>
<br/>
<br/>
<br/>
<Row>
<Col>
<i class="fas fa-university fa-3x"><h3>University of Pennsylvania Coding Bootcamp</h3></i>
</Col>
</Row>


</Col>




    
    
    



</Row>
      

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

export default Profile;





