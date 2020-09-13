import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <header id="home">
                {/* start #nav */}
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
                        {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
                    </ul>
                </nav>
                {/* end #nav-wrap */}
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Jorge Salas.</h1>
                        <h3>I'm a México based <span>Software Developer</span> who loves 
                            Frontend Development and everything related to Software Engineering. Let's 
                            <a className="smoothscroll" href="#about"> start scrolling </a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.
                        </h3>
                        <hr />
                        <ul className="social">
                            <li>
                                <a href="https://www.github.com/rosgeorg" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jorge-salasro/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle" />
                    </a>
                </p>
            </header>

      )
    }
}