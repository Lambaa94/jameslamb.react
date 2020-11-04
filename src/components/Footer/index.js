import React from "react";


function Footer() {

    return (
        <footer>
            <section className="pt-4 pb-1">
                <p>Copyright &#169; 2020</p>
                {/* <!-- Social Media --> */}
                <a href="https://www.facebook.com/Lambaa94" target="_blank"> <i className="fab fa-facebook-square fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/james-lamb-748a99a7/" target="_blank"> <i className="fab fa-linkedin fa-3x"></i></a>
                <a href="https://twitter.com/Chops07" target="_blank"> <i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://github.com/Lambaa94" target="_blank"> <i className="fab fa-github-square fa-3x"></i></a>
                <a href="mailto:jameslamb13@gmail.com"> <i className="fas fa-envelope-square fa-3x"></i></a>
            </section>
        </footer>
    )
}

export default Footer;