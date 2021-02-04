import { React } from 'react';
import {NavLink} from "react-router-dom";
import google from '../images/google-plus 1.png';

export const Login = () => {
    return (
        <div id="login-main">
            <div className="login card card-body card-columns justify-content-center">
                <NavLink to= "/" className= "login-ele login-btn btn btn-outline-primary more-btn"><img src={google} alt="google" className="login-icon"/>Continue with Google</NavLink>
            </div>
        </div>
    );
}