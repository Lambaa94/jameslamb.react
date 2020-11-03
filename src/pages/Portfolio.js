import React from "react";
import {Container, Row, Col} from "reactstrap";



function Portfolio() {
    return (
        <Container>
        <main className="container mt-5 pt-2 pb-5 mb-5 pr-5 pl-5 rounded">
            <Row>
            {/* <!-- Portfolio heading --> */}
            <Col sm={12} md={6} lg={6}>
            <header className="col-12 mt-5 pt-2 pb-5 mb-5 border-bottom border-primary d-flex">
                <h1>Portfolio</h1>
            </header>
            
            <h5>Click on items below to navigate to webpage</h5>
            <hr />
            </Col>
            <br />
            <br />
            <br />
            <Row>
            <section className="row">
                <Col>
                <figure className="col-lg-6">
                    <h5>Brewery Finder</h5>
                    <a href="https://lambaa94.github.io/Brewery-Finder/"><img
                            src="/assets/images/Screen Shot 2020-09-20 at 5.09.57 PM.png" alt="Brewery Finder"
                            className="img-thumbnail" style={{border:'2px', 'solid' :'#1A2A43'}}/></a>
                    <a href="https://github.com/Lambaa94/Brewery-Finder" style={{color: "darkCyan"}}>Link to GitHub
                        Repository</a>
                </figure>
                </Col>
                <Col>
                <figure className="col-lg-6">
                    <h5>Slurp-Da-Soup</h5>
                    <a href="https://eat-da-soup.herokuapp.com/"><img
                            src="assets/images/Untitled.png" alt="Eat-Da-Soup"
                            className="img-thumbnail" style={{border: '2px', 'solid': "#1A2A43"}}/></a>
                    <a href="https://github.com/Lambaa94/Soups" style={{color: "darkCyan"}}>Link to GitHub
                        Repository</a>
                </figure>
                </Col>
            </section>
            </Row>
            <Row>
            <section className="row">
            <Col>
                <figure className="col-lg-6">
                    <h5>Stream-Saver</h5>
                    <a href="https://streamsaver.herokuapp.com/"><img
                            src="assets/images/streamSaver.png" alt="stream saver"
                            className="img-thumbnail" style={{border: '2px', 'solid': "#1A2A43"}}/></a>
                    <a href="https://github.com/Lambaa94/Stream-Saver" style={{color: "darkCyan"}}>Link to GitHub
                        Repository</a>
                </figure>
                </Col>
                <Col>
                <figure className="col-lg-6">
                    <h5>Work Day Scheduler</h5>
                    <a href="https://lambaa94.github.io/Work-Scheduler/"><img
                            src="assets/images/Screen Shot 2020-09-19 at 12.43.49 AM.png" alt="Work Day Scheduler"
                            className="img-thumbnail" style={{border: '2px', 'solid': "#1A2A43"}}/></a>
                    <a href="https://github.com/Lambaa94/Work-Scheduler" style={{color: "darkCyan"}}>Link to GitHub
                        Repository</a>
                </figure>
                </Col>
            </section>
            </Row>
            <Row>
            <section className="row">
            <Col>
                <figure className="col-lg-6">
                    <h5>Password Generator</h5>
                    <a href="https://lambaa94.github.io/Password-Gen/"><img
                            src="assets/images/Screen Shot 2020-09-19 at 12.47.42 AM.png" alt="Password Generator"
                            className="img-thumbnail" style={{border: '2px', 'solid': "#1A2A43"}}/></a>
                    <a href="https://github.com/Lambaa94/Password-Gen" style={{color: "darkCyan"}}>Link to GitHub
                        Repository</a>
                </figure>
                </Col>
                <Col>
                <figure className="col-lg-6">
                    <h5>Weather Dashboard</h5>
                    <a href="https://lambaa94.github.io/Weather-Dashboard/"><img
                            src="assets/images/Screen Shot 2020-09-19 at 12.42.30 AM.png" alt="Weather Dashboard"
                            className="img-thumbnail" style={{border: '2px', 'solid': "#1A2A43"}}/></a>
                    <a href="https://github.com/Lambaa94/Weather-Dashboard" style={{color: "darkCyan"}}>Link to GitHub
                        Repository</a>
                </figure>
                </Col>
            </section>
            </Row>
            <Row>
        <section className="row">
        <Col>
            <figure className="col-lg-6">
                <h5>API Quiz</h5>
                <a href="https://lambaa94.github.io/Api-Quiz/"><img
                        src="assets/images/Screen Shot 2020-09-19 at 12.42.55 AM.png" alt="API Quiz"
                        className="img-thumbnail" style={{border: '2px', 'solid': "#1A2A43"}}/></a>
                <a href="https://github.com/Lambaa94/Api-Quiz" style={{color: "darkCyan"}}>Link to GitHub
                    Repository</a>
            </figure>
            </Col>
            <Col>
            <figure className="col-lg-6">
                <br/>
                <h5>Link to download Resume</h5>
                <a href="https://docs.google.com/document/d/1derMmx3P5p19w2RurNWZ1ZBbOSWU_UeQ7tJfaZKu0Os/export?format=pdf" style={{color: "darkCyan"}}>Download Resume Here</a>
                <br/>
                <br/>
                <br/>
                <h6>Link to GitHub and Linkedin Below in Footer</h6>
            </figure>
            </Col>
        </section>
        </Row>
        </Row>
     </main>
    
    </Container>
    )
}

export default Portfolio;