import React, { Component } from 'react'

export default class resume extends Component {
    render() {
        return (
            <section id="resume">
                {/* Education
----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Dev.F</h3>
                                <p className="info">
                                    Web Development White, Red, and Black Belt / Master in Coding <span>•</span>{" "}
                                    <em className="date">January 2020 - Present Date</em>
                                </p>
                                <div className = 'newspaper'>
                                    · HTML <br/>
                                    · CSS <br/>
                                    · Bootstrap <br/>
                                    · Programming Fundamentals <br/>
                                    · Data structures <br/>
                                    · Basic Algorithmics <br/>
                                    · ECMAscript 6 <br/>
                                    · OOP <br/>
                                    · Advanced Javascript <br/>
                                    · Server-Side Programming <br/>
                                    · Introduction to Databases <br/>
                                    · Client-Side Programming <br/>
                                    · MongoDB <br/>
                                    · REST API <br/>
                                    · Javascript Frameworks <br/>
                                    · File Structure <br/>
                                    · Deployment <br/>
                                    · Design Thinking <br/>
                                    · Figma <br/>
                                    · Atomic Design <br/>
                                </div> 
                                <br/>
                            </div>
                        </div>
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Instituto Tecnológico de Durango</h3>
                                <p className="info">
                                    B.S. Degree in Electronic Engineering <span>•</span>{" "}
                                    <em className="date">2010 - 2015</em>
                                </p>
                                <p>
                                    Embedded Software, Microcontrollers, Microprocessors, Robotics and
                                    Home Automation 
                                </p>
                            </div>
                        </div>
                        {/* item end */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End Education */}
                {/* Work
----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Independent/Freelancer</h3>
                                <p className="info">
                                    Web Developer <span>•</span>
                                    <em className="date">June 2020 - Present</em>
                                </p>
                                <ul className="a">
                                    <li>
                                        Creating solutions for local business with obsolete or non existing web platforms,
                                        migrating web sites from Wix to HTML, CSS and Javascript in order to achieve a better
                                        functionality and speed. 
                                    </li>
                                    <li>
                                        Developing Bootcamp's full stack projects using MERN stack.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Blatt Energy</h3>
                                <p className="info">
                                    Partner/Commercial and Project Leader <span>•</span>
                                    <em className="date">June 2017 - December 2019</em>
                                </p>
                                <p>
                                Responsible for business processes and customer service, as well as designer 
                                and developer of custom projects to reduce electricity consumption by up to 
                                100% and gas consumption by up to 80%.
                                </p>
                                <ul className="a">
                                    <li>
                                        Survey of customer requirements and needs through our own methodology, 
                                        ensuring a proposal limited to specific needs.
                                    </li>
                                    <li>
                                        Management of multidisciplinary teams of up to 12 people, completing 
                                        to date more than 300 projects installed according to the corresponding 
                                        Official Mexican Standard
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Continental Automotive Guadalajara</h3>
                                <p className="info">
                                    Software Requirements Manager <span>•</span>
                                    <em className="date">February 2016 - May 2017</em>
                                </p>
                                <p>
                                    Responsible for the correct implementation of the requirements management 
                                    process, as well as for documentation, analysis, monitoring, prioritization 
                                    and approval of requirements through communication with customers and 
                                    interested parties within the established times.
                                </p>
                                <ul className="a">
                                    <li>
                                        Design and implementation of a checklist with points of the requirements 
                                        management process to review, reducing downtimes due to erroneous 
                                        assignment of owners of documents in 100%
                                    </li>
                                    <li>
                                        Effective communication with the systems team and customers, to solve 
                                        problems with requirements before the deadline in 95% of cases.
                                    </li>
                                </ul>
                                <p className="info">
                                    Software Trainee <span>•</span>
                                    <em className="date">September 2015 - January 2016</em>
                                </p>
                                <p>
                                    Involved in the development of software for automotive prototypes, 
                                    identifying requirements, coding and establishing test cases.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* main-col end */}
                </div>
                {/* End Work */}
                {/* Skills
----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            During this year I've been enrolled on some Bootcamps offered by Dev.F,
                            and I've been focusing on the Frontend topics such as HTML, CSS, Javascript,
                            CSS, frameworks such as Bootstrap, responsive design, as well as version control
                            and some basics of UX/UI. 
                        </p>
                        <div className="bars">
                            <ul className="skills">
                                <li>
                                    <span className="bar-expand html5" />
                                    <em>HTML</em>
                                </li>
                                <li>
                                    <span className="bar-expand css" />
                                    <em>CSS</em>
                                </li>
                                <li>
                                    <span className="bar-expand javascript" />
                                    <em>Javascript</em>
                                </li>
                                <li>
                                    <span className="bar-expand react" />
                                    <em>ReactJS</em>
                                </li>
                                <li>
                                    <span className="bar-expand wordpress" />
                                    <em>Wordpress</em>
                                </li>
                                <li>
                                    <span className="bar-expand php" />
                                    <em>PHP</em>
                                </li>
                                <li>
                                    <span className="bar-expand node" />
                                    <em>NodeJS</em>
                                </li>
                                <li>
                                    <span className="bar-expand mongo" />
                                    <em>MongoDB</em>
                                </li>
                            </ul>
                        </div>
                        {/* end skill-bars */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End skills */}
            </section>

        )
    }
}