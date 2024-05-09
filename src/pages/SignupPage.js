import React from "react";
import "./SignupPage.css";
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();

    const handlesignuppage = () => {
        navigate('/product');
    }


    const handlelogin = () => {
        navigate('/login');
    }

    return (
        <div className="container">
            <p className="title"><h4 className="text">Get Started</h4></p>
            <div className="underline"></div>
            <div className="login">
                <div className="inputs">
                    <form className="App">
                        <input type="text" placeholder="Name" className="inputField" />
                        <input type="email" placeholder="Email" className="inputField" />
                        <input type="password" placeholder="Password" className="inputField" />
                        <input type="tel" placeholder="Mobile Number" className="inputField" />
                        <br></br>
                        <input type={"submit"} className="submitButton" value="Sign Up" onClick={handlesignuppage} />
                        <h5>Already have an account?&nbsp;<a href="#" onClick={handlelogin} className="log">Login</a></h5>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
