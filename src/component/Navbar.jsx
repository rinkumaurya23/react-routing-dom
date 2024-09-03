import React from 'react'
import { NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li><NavLink className="nav-bar-link"   to="/about">About</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/contact">contact</NavLink></li> 
        <li><NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/channel">Channel</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/other">Other</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/login">Login</NavLink></li>




        <li><NavLink className="nav-bar-link" to="/services">Services</NavLink></li>

        

  


      

      </ul>
    </div>
  )
}

export default Navbar;
