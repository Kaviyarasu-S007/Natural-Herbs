import React from "react";
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaEnvelope, FaFacebook } from '@fortawesome/free-brands-svg-icons'; 


function LoginPage() {
    const navigate = useNavigate();

    const handlesignup = () => {
        navigate('/signup');
    }
    const handlesignuppage = () => {
        navigate('/product');
    }


    return (
        <div className="container">
            <p className="title"><h4 className="text">Get Started</h4></p>
            <div className="underline"></div>
            <div className="login">
                <div className="inputs">
                    <form className="App">
                        <input type="email" placeholder="Email" className="inputField" />
                        <input type="password" placeholder="Password" className="inputField" />
        
                        <br></br>
                        <input type={"submit"} className="submitButton" value="Login" onClick={handlesignuppage} />
                        <h5>Don't have an account?&nbsp;<a href="#" onClick={handlesignup} className="log">Signup</a></h5>
                        {/* <FontAwesomeIcon icon={FaFacebook} /> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
