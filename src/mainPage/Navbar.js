import React from 'react'
import './Navbar.css'
import './home.css'
import { NavLink } from 'react-router-dom'
import NaiLogo from '../Images/NaibeauLogo.png'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <NavLink to='/' className="navbar-brand ps-5 fw-bold fs-4" href="#"><img alt=' logo' src={NaiLogo} style={{ height: "1.7rem" }} /></NavLink>
          <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav pe-3 ">
              <li className="nav-item ">
                <NavLink to='/' className="nav-link" aria-current="page" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='Services' className="nav-link" >Our services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='safety' className="nav-link" >Safety</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='about' className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='contact' className="nav-link">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='blogs' className="nav-link" >Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar