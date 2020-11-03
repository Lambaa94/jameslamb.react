import React from "react";
import {Link, useLocation} from "react-router-dom";



function Navbar() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/" >James Lamb</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-hamburger fa-2x"></span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;  