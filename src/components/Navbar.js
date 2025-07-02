// File: src/components/Navbar.js

import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import './styles/Navbar.css'; // ✅ Import the plain CSS
import { GlobeAltIcon } from "@heroicons/react/16/solid";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Trains from "../pages/Trains";
import Buses from "../pages/Buses";
import Cars from "../pages/Cars";
import Holidays from "../pages/Holidays";
import { Contact, GlobeIcon, GlobeLockIcon } from "lucide-react";
import Support from "../pages/Support";
import AboutUs from "../pages/AboutUs";
import SignIn from "../pages/SignIn";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  

  return (
    <header className="navbar">
      <div className="navbar-container">
         <div className="navbar-brand">
          <FaGlobe className="navbar-icon" />
          <span className="navbar-logo">Desiney World</span>
        </div>
        {/* Desktop Nav */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/support">Contact</Link>
          <Link to="/about">About</Link>

          <Link to="/signin"> <button className="nav-login-btn"> Login</button></Link>

          
        </nav>

        {/* Mobile Icon */}
        <button onClick={toggleMenu} className="navbar-toggle">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
       
      </div>

      {/* Mobile Menu */}
     {menuOpen && (
  <div className="navbar-mobile">
    <Link to="/flights" onClick={() => setMenuOpen(false)}>Flights</Link>
    <Link to="/hotels" onClick={() => setMenuOpen(false)}>Hotels</Link>
    <Link to="/trains" onClick={() => setMenuOpen(false)}>Trains</Link>
    <Link to="/buses" onClick={() => setMenuOpen(false)}>Buses</Link>
    <Link to="/cars" onClick={() => setMenuOpen(false)}>Cars</Link>
    <Link to="/holidays" onClick={() => setMenuOpen(false)}>Holidays</Link>
    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
    <Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link>
    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
    <Link to="/signin" onClick={() => setMenuOpen(false)}>Login</Link>
  </div>
)}
    
    </header>
  );
}

export default Navbar;
