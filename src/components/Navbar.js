// File: src/components/Navbar.js

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import './styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left: Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="navbar-toggle mobile-left">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Center: Logo */}
        <div className="navbar-brand">
          <FaGlobe className="navbar-icon" />
          <span className="navbar-logo">Desiney World</span>
        </div>

        {/* Right: Profile Icon */}
        <div className="nav-profile-wrapper mobile-right" ref={profileRef}>
          <div className="nav-profile-icon" onClick={toggleProfile}>
            <CgProfile />
          </div>
          {profileOpen && (
            <div className="profile-dropdown">
              <Link to="/profile">View Profile</Link>
              <Link to="/bookings">My Bookings</Link>
              <Link to="/settings">Settings</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/support">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signin">
            <button className="nav-login-btn">Login</button>
          </Link>
        </nav>
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
