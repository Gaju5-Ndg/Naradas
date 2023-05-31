
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import logo from "../../images/logo-2.png";
import {RiAccountCircleFill} from 'react-icons/ri'
import "../../App.css"



export default function Navbar () {
    const token = localStorage.getItem("token");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
      };
    
   const handleLogout = () =>{
        localStorage.removeItem("token");
    }
    return (
<nav>
<div class="logo">
    <img src={logo} alt="Logo" />
</div>

    <ul className='nav-links'>
                    <li><NavLink to={'/'} > Home</NavLink></li>
                    <li><NavLink to={'/'} >  About</NavLink></li>
                    <li><NavLink to={'/'} > Services</NavLink></li>
                    <li><NavLink to={'/'} > Contact</NavLink></li>
                    {token ? (
          <li className="dropdown" onClick={handleDropdownToggle}>
            <RiAccountCircleFill style={{ fontSize: "20px", color: "white", cursor: "pointer" }} />
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>History</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </li>
        ) : (
          <li>
            <button><NavLink to={'/login'}>Get Started</NavLink></button>
          </li>
        )}
      </ul>
    </nav>
  );
        }





