import { React } from 'react';
import home1 from '../images/home1-1.png';
import home21 from '../images/realtime.png';
import home22 from '../images/fast.png';
import home23 from '../images/practice.png';
import home24 from '../images/management.png';
import {NavLink} from "react-router-dom";


export const Home = () => {
    return (
        <div className="home container-fluid">
            <div className="home-1 navbar-nav">
                <div id="cont-1">
                    <h1>Learn To Code</h1> <br/><br/>
                    <p>Welcome to Codelabs - The code learning website will help you learn your programing languague</p> <br/>
                    <NavLink to="/signup" className="btn btn-lg btn-outline-primary">Sign up now</NavLink>
                </div>
                <div id="home-img-1">
                    <img src={home1} alt="Computer" id="home1-1"/>
                </div>
            </div>

            <div className="home-2">
                <h3>Let See What We Can Help You!</h3>
                <div className="cont-2 navbar-nav">
                    <div className= "card card-body table-hover" id="card-1">
                        <img src={home21} className="home2-pic img-fluid" alt="Realtime" id="home2-pic1"/>
                        <div className="cont-card">
                            <h5>Realtime Classroom</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className= "card card-body card-columns">
                        <img src={home22} className="home2-pic img-fluid " alt="Fast Connection" id="home2-pic2"/>
                        <div className="cont-card">
                            <h5>Fast Connection</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className= "card card-body card-columns">
                        <img src={home23} className="home2-pic img-fluid " alt="Practice" id="home2-pic3"/>
                        <div className="cont-card">
                            <h5>Basic 101 Practice</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className= "card card-body card-columns">
                        <img src={home24} className="home2-pic img-fluid " alt="Management" id="home2-pic4"/>
                        <div className="cont-card">
                            <h5>Management</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-3 navbar-nav">
                <div className="home3-cont" id="home31">
                    <div className="card card-body home3-lan">
                        <h1>Java</h1>
                    </div>
                    <div className="card card-body home3-lan">
                        <h1>Python</h1>
                    </div>
                </div>

                <div className="card card-body" id="home32">
                    <h1>PHP</h1>
                </div>

                <div id="home33">
                    <h2>Languages You Can Learn With Us?</h2> <br/>
                    <p>Our Tech Explorer's Toolkit is packed with free resources for anyone curious about getting a job in tech. No matter what stage you're at in your journey into tech, our bi-monthly Toolkit will bring the resources you need straight to your inbox.</p>
                </div>
            </div>

            <div className="home-4">
                <h3>Our Newest Labs</h3>
                <div className="cont-4 navbar-nav">
                    <div className= "card card-body" id="card-1">
                        <img src={home22} className="home4-pic img-fluid" alt="Realtime" id="home4-pic1"/>
                        <div className="cont-card">
                            <h5>Fast Connection</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to= "/" className= "btn btn-outline-primary more-btn">More</NavLink>
                        </div>
                    </div>

                    <div className= "card card-body card-columns">
                        <img src={home23} className="home4-pic img-fluid " alt="Fast Connection" id="home4-pic2"/>
                        <div className="cont-card">
                            <h5>Basic 101 Practice</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to= "/" className= "btn btn-outline-primary more-btn">More</NavLink>
                        </div>
                    </div>

                    <div className= "card card-body card-columns">
                        <img src={home24} className="home4-pic img-fluid " alt="Practice" id="home4-pic3"/>
                        <div className="cont-card">
                            <h5>Management</h5>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to= "/" className= "btn btn-outline-primary more-btn">More</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}