import React, { useState } from "react";
import ReactGoogleLogin from "react-google-login";

import { Link } from 'react-router-dom';
import "../styles/About.css";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const clientId = "189128147702-k2lg9gk2d91hf36lrhujsen4ign4tlc6.apps.googleusercontent.com";

function Login() {
    //     export default function Login(props){
    //   const onResponse = resp => {
    //     console.log(resp);
    //   };
    //   return (

    //     <div className="text-center m-5-auto">
    //     <h2>Sign in to us</h2>
    //     <form action="/">
    //         <p>
    //             <label>Username or email address</label><br/>
    //             <input type="text" name="first_name" required />
    //         </p>
    //         <p>
    //             <label>Password</label>
    //             <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
    //             <br/>
    //             <input type="password" name="password" required />
    //         </p>
    //         <p>
    //             <button id="sub_btn" type="submit">Login</button>
    //         </p>
    //     </form>
    //        {/* <ReactGoogleLogin
    //        clientId="189128147702-k2lg9gk2d91hf36lrhujsen4ign4tlc6.apps.googleusercontent.com" // We created this earlier, remember?
    //       buttonText="Login with Google"
    //       uxMode='redirect'
    //       redirectUri="http://localhost:3000"
    //      onSuccess={onResponse}
    //      onFailure={onResponse}
    //    /> */}
    //     <footer>
    //         <p>First time? <Link to="/register">Create an account</Link>.</p>
    //         <p><Link to="/">Back to Homepage</Link>.</p>
    //     </footer>
    // </div>
    //   );
    const [showloginButton, setShowloginButton] = useState(true);
    const navigate = useNavigate();
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        localStorage.setItem('token', JSON.stringify(res.profileObj))
        navigate("/home");
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form className="loginForm" action="/">
                <p>
                    <label>Username or email address</label><br />
                    <input type="text" name="first_name" required className="width100" />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" required className="width100" />
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
           <hr></hr>
            <div>
                {showloginButton ?
                    <ReactGoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        redirectUri="http://localhost:3000/factfind"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> : null}


            </div>
        </div>
    );
}

export default Login;
