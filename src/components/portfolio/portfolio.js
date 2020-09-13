import React, { Component } from 'react'

export default class portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        {/* portfolio-wrapper */}
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01" title>
                                        <img alt="not found" src="images/portfolio/blattenergy.png" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Blatt Energy</h5>
                                                <p>Static Website</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-02" title>
                                        <img alt="not found" src="images/portfolio/pinterest.png"/>
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Pinterest Clone</h5>
                                                <p>Main page layout clone</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-03" title>
                                        <img alt="not found" src="images/portfolio/pokedex.png" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Pokedex</h5>
                                                <p>Pokedex web app</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-04" title>
                                        <img alt="not found" src="images/portfolio/petfinder.png" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Pet Finder</h5>
                                                <p>React App</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </a>
                                </div>
                            </div>{" "}
                            {/* item end */}
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-05" title>
                                        <img alt="not found" src="images/portfolio/emr.png" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Electronic Medical Record</h5>
                                                <p>React App</p>
                                            </div>
                                        </div>
                                        <div className="link-icon">
                                            <i className="icon-plus" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* item end */}
                        </div>
                        {/* portfolio-wrapper end */}
                    </div>
                    {/* twelve columns end */}
                    {/* Modal Popup
                --------------------------------------------------------------- */}
                    <div id="modal-01" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/blattenergy.png"
                            alt="not found"
                        />
                        <div className="description-box">
                            <h4>Blatt Energy Website</h4>
                            <p>
                                Local Business Website using HTML and CSS including responsive design
                            </p>
                            <span className="categories">
                                <i className="fa fa-tag" />Frontend Development
                            </span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/rosgeorg/BlattEnergy-Website" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="http://www.blattenergy.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-01 End */}
                    <div id="modal-02" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/pinterest.png"
                            alt="not found"
                        />
                        <div className="description-box">
                            <h4>Pinterest Clone</h4>
                            <p>
                                Responsive Pinterest Clone using HTML and CSS.
                            </p>
                            <span className="categories">
                                <i className="fa fa-tag" /> Frontend Development
                            </span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/rosgeorg/Pinterest-Clone" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://rosgeorg.github.io/Pinterest-Clone/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-02 End */}
                    <div id="modal-03" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/pokedex.png"
                            alt="not found"
                        />
                        <div className="description-box">
                            <h4>Retro Pokedex</h4>
                            <p>
                                Pokedex built using Javascript, HTML and CSS including search functionality. 
                                It gets data from local JSON file obtained from an API separately and shows
                                pokemon's pictures, name, type and HP.
                            </p>
                            <span className="categories">
                                <i className="fa fa-tag" /> Frontend development
                            </span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/rosgeorg/RetroPokedex" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://festive-jepsen-44baa9.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-03 End */}
                    <div id="modal-04" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/petfinder.png"
                            alt="not found"
                        />
                        <div className="description-box">
                            <h4>Pet Finder</h4>
                            <p>
                                Platform built in React JS that allows to post lost pets and link
                                them to a database in mongoDB through a CRUD using Node JS and express.
                            </p>
                            <span className="categories">
                                <i className="fa fa-tag" />MERN Stack Development</span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/rosgeorg/FrontEnd-App-Proyecto-CintaRoja" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://nifty-mestorf-4d4c18.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-04 End */}
                    <div id="modal-05" className="popup-modal mfp-hide">
                        <img
                            className="scale-with-grid"
                            src="images/portfolio/modals/emr.png"
                            alt="not found"
                        />
                        <div className="description-box">
                            <h4>Electronic Medical Record</h4>
                            <p>
                                Medical Platform prototype built in React JS including log in and register 
                                functionality using JSON web token, that allows to post data about patients and their 
                                appointments and link them to a database in mongoDB through an API using Node JS and 
                                axios.
                            </p>
                            <span className="categories">
                                <i className="fa fa-tag" />MERN Stack Development
                            </span>
                        </div>
                        <div className="link-box">
                            <a href="https://github.com/rosgeorg/cintaNegra-frontend" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://jolly-wilson-6890bb.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a className="popup-modal-dismiss">Close</a>
                        </div>
                    </div>
                    {/* modal-05 End */}
                </div>
                {/* row End */}
            </section>
      )
    }
}