import { React } from 'react';
import {NavLink} from 'react-router-dom';
export const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><b>{props.appName}</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/teacher" className="nav-link">Teacher</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/student" className="nav-link">Student</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/myLabs" className="nav-link">My Labs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/documentation" className="nav-link">Documentation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link btn btn-outline-primary">Log In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}