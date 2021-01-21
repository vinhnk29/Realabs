import { React } from 'react';
import {NavLink} from 'react-router-dom';
export const Footer = (props) => {
    return (
        <footer className="navbar navbar-light">
            <div className="container-fluid footer">
                <div id="content" className="justify-content-start">
                    <h5>REALABS</h5>
                    <p>REALABS is provider of practical teaching aids through powerful realtime classroom features.</p>
                </div>
                <div className="flex-row" id="programs">
                    <h5>PROGRAMS</h5>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/techmakers" className="nav-link">Techmakers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/agency" className="nav-link">Agency</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/program" className="nav-link">Program</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/groups" className="nav-link">Google Developer Groups</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experts" className="nav-link">Google Developer Experts</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex-row" id="console">
                    <h5>DEVELOPER CONSOLE</h5>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/ggapi" className="nav-link">Google API Console</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/ggcloud" className="nav-link">Google Cloud Developer Console</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/ggplay" className="nav-link">Google Play Developer Console</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/firebase" className="nav-link">Firebase Console</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex-row" id="more">
                    <h5>EXPLORE More</h5>
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/android" className="nav-link">Android</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/ios" className="nav-link">iOS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/web" className="nav-link">Web</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/games" className="nav-link">Games</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}