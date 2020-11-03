import React from "react";
import {Container, Row, Col} from "reactstrap";
function Contact() {
    return (
        <main className="container mt-5 pt-2 pb-5 mb-5 pr-5 pl-5 rounded" style={{border:'3px' ,'solid' :'#1A2A43'}}>
            <section className="row">
                {/* <!-- Contact Heading --> */}
                <section className="col-12 mt-5 pt-2 pb-5 mb-5 border-bottom border-primary d-flex">
                    <h1>Contact</h1>
                </section>
                <section className="row">
                    <section className="col">
                        {/* <!-- Contact Form --> */}
                        <form action="mailto:jameslamb13@gmail.com" method="post" enctype="text/plain">
                            <div className="form-row pb-3">
                                <div className="col">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control" placeholder="Full Name" id="name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" className="form-control" id="email"
                                    placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">submit</button>
                                </div>
                            </div>
                        </form>
                        <section className="justify-content-center text-center">My Phone Number: (646)-853-1534</section>
                        <section className="justify-content-center text-center">My Email Address: jameslamb13@gmail.com</section>
                        <hr />
                        <a className="text-center" href="https://docs.google.com/document/d/1derMmx3P5p19w2RurNWZ1ZBbOSWU_UeQ7tJfaZKu0Os/export?format=pdf" style={{color: "darkCyan"}}>Link to my resume</a>
                        {/* <!-- End of Contact Form --> */}
                    </section>
                </section>
            </section>
        </main>
    )


}

export default Contact;