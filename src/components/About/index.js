import React from "react";
import {Row, Col, Container} from "reactstrap"



function About() {

    return (
         <Container>
        <main className="container mt-5 pt-2 pb-5 mb-5 pr-5 pl-5 rounded">
        <Row>
        <section className="row">
            {/* <!-- About Me heading --> */}
            <Col>
            <section className="col-12 mt-5 pt-2 pb-5 mb-5 border-bottom border-primary d-flex">
                <h1>About Me</h1>
            </section>
            </Col>
            {/* <!-- My Picture and Details --> */}
            <Row>
            <section className="row">
                <Col>
                <main className="col">
                    <Col>
                    <img src="../assets/images/IMG_5807.jpeg" width="200" height="200" alt="James Lamb"
                        className="img-thumbnail float-left mr-3 mb-3 p-0 rounded border col-sm-12 col-md-4"/>
                        </Col>
                        <Col>
                    <summary className="col-xs-12">
                        <p> Full stack web developer with a long history in   Hospitality. Recently worked in a high
                            intensity pre-theatre, fine dining restaurant dealing with large guest counts. I showed that
                            I have exceptional time management skills combined with great organizational skills to keep
                            my guests on time and comfortable. Being a head staff member, I would close the business on
                            lucrative nights, keeping high-profile clients captivated and carefree. Passionate about
                            creating and inventing new, never thought about products. Excited to bring my passion into
                            the workspace with my newly found knowledge of JavaScript, CSS, and React.js. I have a
                            fondness for creating products that are pleasing to the eye and highly functional at the
                            same time. Working my way through college and a conservatory taught me to keep my composure
                            while under pressure. I am looking to be a part of a team to design and create web
                            applications that will benefit the masses.
                            <br />
                            <br />
                            On a more personal note, I have a big passion for food. Cooking and bringing people together
                            with a great meal is one of my favourite things. I love the outdoors including camping,
                            hiking, kayaking and snowbaording. From a young age, I have spent many sleepless nights
                            playing video games. This sparked my interest in coding. I have always dreamed of being a
                            part of a team that creates one of the things that has kept me endlessly entertained. With
                            my knowledge that I have received from the University of Pennsylvania, I plan to rock the
                            tech world and am very excited to begin my endeavour.
                            <br />
                            <br />
                            I've attended college at Rowan College at Burlington County in New Jersey where I studied
                            for my first two years. I transitioned into my acting career in New York City at the
                            American Muscial and Dramatic Academy. While training at this conservatory, I fell deeper in
                            love with the restaurant scene and began to bartend for some of the best restaurants in New
                            York City. I learned how to be a true team player and what it means to be a part of a
                            well-oiled machine. Working in New York's restaurant scene, one acquires knowledge that is
                            very hard to come by. It is a different animal when it comes to this stuff. New Yorkers take
                            their food pretty seriously! My experience in this field has given me the resources to take
                            what I know from the real world and apply it to our ever expanding web. The world is
                            changing and advancing at a rapid pace, and it takes someone that is quick-witted and
                            competent to get things done and done right.
                        </p>
                        <a href="https://docs.google.com/document/d/1derMmx3P5p19w2RurNWZ1ZBbOSWU_UeQ7tJfaZKu0Os/export?format=pdf" style={{color: 'darkCyan'}}>Link to download my resume</a>
                    </summary>
                    </Col>
                </main>
                </Col>
            </section>
            </Row>
        </section>
        </Row>
    </main>
    </Container>
    )
}

export default About;