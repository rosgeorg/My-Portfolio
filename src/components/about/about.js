import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="./images/fotoLapiz.jpeg" alt='not found' />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                                I graduated as an electronics engineer in 2015 and I've been involved in embedded 
                            software and project management areas, but my passion for turning great UX/UI designs 
                            into code achieving fun, creative, accesible and fast web sites took me to the path of 
                            Front End Development and I've never enjoyed coding that much. <br/>
                                Beyond Front End coding, I’m also passionate about and sharing what I’ve learned 
                            and mentoring others. I really value the ability to not only perform web development work 
                            but also help others improve their craft,because I’ve gained so much from others sharing their 
                            skills and knowledge, either within Dev.F or the broader web community.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Jorge Salas</span>
                                    <br />
                                    <span>js_8765@yahoo.com</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="./files/resumeJorgeSalas.pdf" target="_blank" download className="button">
                                        <i className="fa fa-download" />Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      )
    }
}