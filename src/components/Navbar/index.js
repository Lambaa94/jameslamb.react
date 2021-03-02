import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";

function Navbar() {
    
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top sticky-top sticky">
            <h1 className="navbar-brand title">James Lamb</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-hamburger fa-2x"></span>
            </button>
            <div className="collapse navbar-collapse nav justify-content-end sticky" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Skills
                      </Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
                    
                    </li>
                    <li className="nav-item">
                    <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>

                    </li>
                </ul>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;  


