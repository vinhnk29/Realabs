import { React } from 'react';
import {NavLink} from "react-router-dom";
import google from '../images/google-plus 1.png';
import facebook from '../images/Vector.png';

export const Login = () => {
    return (
        <div id="login-main">
            <div className="login card card-body card-columns justify-content-center">
                <h1>Sign In</h1>
                <input id="input-mail" placeholder="Enter email"/>
                <input id="input-pass" placeholder="Enter password"/>
                <button className="btn btn-lg btn-outline-primary signin-btn">Sign In</button>
                <hr/>
                <NavLink to= "/" className= "login-ele login-btn btn btn-outline-primary more-btn"><img src={google} alt="google" className="login-icon"/>Continue with Google</NavLink>
                <NavLink to= "/" className= "login-ele login-btn btn btn-outline-primary more-btn" ><img src={facebook} alt="facebook" className="login-icon"/>Continue with Facebook</NavLink>
            </div>
        </div>
    );
}