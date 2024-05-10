import React from "react";
import "./LoginPage.css";
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';


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
                        
                    </form>
                    
                </div>
                
                
            </div>

            <div className="icons">
                <h4>Or</h4>
                <a href="https://accounts.google.com/v3/signin/identifier?ifkv=AaSxoQxteF4Mw_J87_16QonWnCe3wJffn3dDyT9HUXTpmShCEVRH73k72pc2GiTr-wT6PEj1x18ePg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2146823079%3A1715306592988577&theme=mn&ddm=0" className="icon-link"><FaGoogle size={32} color="orange" className="google" /> </a>
                <a href="https://www.facebook.com/" className="icon-link"><FaFacebook size={32} color="lightblue" className="facebook" /> </a>
                <a href="https://twitter.com/i/flow/login" className="icon-link"><FaTwitter size={32} color="cyan" className="twitter" /> </a>
            </div>

            
            
        </div>
    );
}

export default LoginPage;
