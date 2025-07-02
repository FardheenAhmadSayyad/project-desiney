// File: src/pages/AboutUs.js
import React from "react";
import "../pages/styles/AboutUs.css"; 
import heroImg from "../assets/images/hero-right.webp";
import ScrollToTop from "../components/ScrollToTop";

const AboutUs = () => {
  return (
    <section className="about-wrapper">
     
      <div className="about-container">
        
        {/* 📄 Left Text Content */}
        <div className="about-content">
          <h1>About <span className="brand">Desiney World</span> ✨</h1>
          <p className="intro-text">
            At Desiney World, every journey is a magical tale. Whether you're chasing thrills,
            soaking up cultures, or just relaxing in paradise — we’ve got the perfect plan.
          </p>

          <h3>🎯 Our Mission</h3>
          <p>To spark wanderlust and make travel dreams come true with joy and ease.</p>

          <h3>🌈 Our Vision</h3>
          <p>To be your magical portal to the world’s wonders — one adventure at a time.</p>

          <h3>💡 Why Choose Us?</h3>
          <ul>
            <li>💎 Unlock hidden gems only locals know</li>
            <li>💰 Pocket-friendly packages for all</li>
            <li>⏱️ Time-saving travel plans by experts</li>
            <li>🤝 Travel buddy matching for fun trips</li>
          </ul>

          <h3>👥 Meet the Team</h3>
          <ul>
            <li>John Doe – Chief Adventure Wizard</li>
            <li>Jane Smith – Travel Consultant</li>
            <li>Mike Brown – Happiness Guru</li>
          </ul>

          <h3>💬 What Travelers Say</h3>
          <blockquote>
            "Thanks to this site, I paraglided over the Swiss Alps! A forever memory."  
            <br />— Alice Johnson
          </blockquote>
          <blockquote>
            "The Italian food tour changed my life. My taste buds are still dancing!"  
            <br />— David Williams
          </blockquote>

          <h3>🛵 Ride Free with <span className="brand">Berymo</span></h3>
          <p>
            We’ve partnered with <strong>Berymo</strong> — your free ride-share app that connects
            airports, hotels, and tourist spots in one magical flow.
          </p>
          <ul>
            <li>🚗 Rides included in trip packages</li>
            <li>🛡️ Safe drivers, fully verified</li>
            <li>🌍 Meet locals and fellow travelers</li>
          </ul>

          <p className="cta-text">
            Ready to roll? Start your journey today with <strong>Desiney World</strong> + <strong>Berymo</strong>!
          </p>
          <a href="https://berymo.com/" target="_blank" rel="noopener noreferrer">
          <button className="book-now-btn">🌍 Book Now</button> </a>
        </div>

        {/* 📸 Right Image */}
        <div className="about-image">
          <img src={heroImg} alt="Travel Adventure" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
