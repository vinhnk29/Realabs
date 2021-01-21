import { React } from 'react';
import {NavLink} from "react-router-dom";
import google from '../images/google-plus 1.png';
import facebook from '../images/Vector.png';
import Bnashor from '../images/138791214_345561449746518_3273097103716658674_n.jpg'

export const Signup = () => {
    return (
        <div id="signup-main">
            <div className="signup card card-body card-columns">
                <img src={Bnashor} alt="bnashor" id="bnashor"/>
                <div className="signup-cont">
                    <h1>Sign Up</h1>
                    <div className="info flex-column">
                        <input id="input-name" placeholder="Your name"/>
                        <input id="input-birth" placeholder="Birth"/>
                    </div>
                    <input id="input-mail" placeholder="Enter email"/>
                    <input id="input-pass" placeholder="Enter password"/>
                    <input id="input-pass" placeholder="Re-enter password"/>
                    <button className="btn btn-lg btn-outline-primary signin-btn">Sign Up</button>
                    <hr/>
                    <NavLink to= "/" className= "login-ele login-btn btn btn-outline-primary more-btn"><img src={google} alt="google" className="login-icon"/>Continue with Google</NavLink>
                    <NavLink to= "/" className= "login-ele login-btn btn btn-outline-primary more-btn" ><img src={facebook} alt="facebook" className="login-icon"/>Continue with Facebook</NavLink>
                </div>

            </div>
        </div>
    );
}