import React, {useState} from 'react'
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import HamIcon from "@material-ui/icons/Reorder";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
function Navbar(props) {

    const [openLinks, setOpenLinks]=useState(false);
    const clientId = "189128147702-k2lg9gk2d91hf36lrhujsen4ign4tlc6.apps.googleusercontent.com";
    const navigate = useNavigate();
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }
   
    let url="";
    let show=false;
      if(!localStorage.getItem('token')){
       url= "/Login";
       show=false;
      }
      else{
        url="/FactFind";
        show=true;
      }
    
    const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      localStorage.clear();
      navigate("/");
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks?"open":"close"}>
          <img src={logo} />
          <div className='hiddenLinks'>
            <Link to='/home'>Home</Link>
            <a href={url}>Fact Find</a>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/login' style={show ? {display: 'none'} : {}}>Login</Link>
            <div style={show ? {} : {display: 'none'}}>
            <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
            >
            </GoogleLogout></div>
          </div>
      </div>
      <div className='rightSide'>
          <Link to='/home'>Home</Link>
          <a href={url}>Fact Find</a>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/login' style={show ? {display: 'none'} : {}}>Login</Link>
          <div style={show ? {} : {display: 'none'}}><GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
            >
            </GoogleLogout></div>
          <button onClick={toggleNavbar}>
            <HamIcon/>
          </button>
      </div>
    </div>
  )
}

export default Navbar
