import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'

function Footer() {
    return (
        <footer>
                <div className="conteiner">
                    <div className="first-row">
                        <div className="about-us">
                            <h3>About Us</h3>
                            <p>We want to help bring talanted students and unique startups together</p>
                        </div>
                        <div className="contact-us">
                            <h4>Contact Us</h4>
                            <p><i className="fas fa-phone"></i>&nbsp;<a href="tel:+995568701121"><span>+995 568 701 121</span></a></p>
                            <p><i className="fas fa-envelope"></i>&nbsp;<a href="mailto:giorgilasha3@gmail.com"><span>giorgilasha3@gmail.com</span></a></p>
                        </div>
                    </div>

                    <div className="second-row">
                        <h3>Information</h3>
                        <p>About Us</p>
                        <p>More Search</p>
                        <p>Blog</p>
                        <p>Testimonials</p>
                        <p>Events</p>
                    </div>

                    <div className="third-row">
                        <h3>Helpful Links</h3>
                        <p>Services</p>
                        <p>Supports</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className="fourth-row">
                        <h3>Subscribe More Info</h3>
                        <input type="email" placeholder="Enter Your Email"/><p></p>
                        <span>Subscribe</span>
                    </div>
                </div>
                    <div className="border"></div>
                    <div className="social">
                        <div className="icon fb">
                            <a href="https://www.facebook.com/1ntsko/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className="icon github">
                            <a href="https://github.com/1ntsko" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="icon linkedin">
                            <a href="https://www.linkedin.com/in/1ntsko/" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
        </footer>
    )
}

export default Footer
