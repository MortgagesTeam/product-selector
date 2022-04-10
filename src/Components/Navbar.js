import React, {useState} from 'react'
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import HamIcon from "@material-ui/icons/Reorder";
function Navbar() {

    const [openLinks, setOpenLinks]=useState(false);

    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks?"open":"close"}>
          <img src={logo} />
          <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
            <Link to='/FactFind'>Fact Find</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
          </div>
      </div>
      <div className='rightSide'>
          <Link to='/'>Home</Link>
          <Link to='/factfind'>Fact Find</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <button onClick={toggleNavbar}>
            <HamIcon/>
          </button>
      </div>
    </div>
  )
}

export default Navbar
