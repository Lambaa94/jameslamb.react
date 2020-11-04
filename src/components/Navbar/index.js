import React from "react";
import {Link, useLocation} from "react-router-dom";



function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand nav-link" href="#about" >James Lamb</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-hamburger fa-2x"></span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</a>
                    </li>
                    <li className="nav-item">
                        <a to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a to="contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;  


