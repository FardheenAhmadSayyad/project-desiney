// File: src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaPlane,
  FaHotel,
  FaTrain,
  FaBus,
  FaCar,
  FaUmbrellaBeach,
} from "react-icons/fa";

import heroRight from "../assets/images/hero-right.webp";
import ourFeatures from "../assets/images/our-features.webp";
import relaxImg from "../assets/images/HIW1.webp";
import checklistImg from "../assets/images/HIW2.webp";
import saveImg from "../assets/images/HIW3.webp";
import dottedLine from "../assets/images/dottedline.svg";
import "./styles/Home.css";


const cards = [
  { path: "flights", icon: <FaPlane />, label: "Book Flights" },
  { path: "hotels", icon: <FaHotel />, label: "Find Hotels" },
  { path: "trains", icon: <FaTrain />, label: "Train Tickets" },
  { path: "buses", icon: <FaBus />, label: "Bus Booking" },
  { path: "cars", icon: <FaCar />, label: "Rent a Car" },
  { path: "holidays", icon: <FaUmbrellaBeach />, label: "Holiday Packages" },
];

const benefits = [
  {
    img: relaxImg,
    title: "Book & relax",
    desc: "Let each trip be an inspirational journey,\neach room a peaceful space",
  },
  {
    img: checklistImg,
    title: "Smart checklist",
    desc: "Let each trip be an inspirational journey,\neach room a peaceful space",
  },
  {
    img: saveImg,
    title: "Save more",
    desc: "Let each trip be an inspirational journey,\neach room a peaceful space",
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    setActiveTab(path);
  }, [location.pathname]);
useEffect(() => {
  const path = location.pathname.split("/").pop();
  setActiveTab(path === "" || path === "/" ? "flights" : path);
}, [location.pathname]);

  return (
    <div className="home-wrapper">
   
      {/* Hero Section */}
      <section className="intro-section">
        <div className="intro-text">
          <h1>Hotel, car & experiences</h1>
          <p>
            Accompanying us, you have a trip full of experiences: booking
            accommodation, resort villas, hotels
          </p>
        </div>
        <div className="intro-image">
          <img src={heroRight} alt="Travel" />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="home-section">
    
        <div className="home-tabs">
      {cards.map(({ path, icon, label }) => (
  <Link
    key={path}
    to={path}
    onClick={() => setActiveTab(path)}
    className={`home-tab ${activeTab === path ? "active" : ""}`}
  >
    <span className="home-tab-icon">{icon}</span>
    {label}
  </Link>
))}

        </div>

        <div className="home-subpage">
          <Outlet />
        </div>
      </section>

      {/* Happening Cities */}
      <div className={`happening-container ${isMobile ? "mobile" : ""}`}>
        <div className="happening-image-section">
          <img src={ourFeatures} alt="Our Features" className="happening-image" />
        </div>
        <div className="happening-content-section">
          <h1 className="happening-title">Happening cities</h1>

          <div className="happening-feature">
            <span className="happening-label advertising">Advertising</span>
            <h3>Cost-effective advertising</h3>
            <p>
              With a free listing, you can advertise your rental with no upfront costs
            </p>
          </div>

          <div className="happening-feature">
            <span className="happening-label exposure">Exposure</span>
            <h3>Reach millions with ease</h3>
            <p>
              Millions of people are searching for unique places to stay around the world
            </p>
          </div>

          <div className="happening-feature">
            <span className="happening-label secure">Secure</span>
            <h3>Secure and simple</h3>
            <p>
              A Holiday Lettings listing gives you a secure and easy way to take bookings
              and payments online
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-wrapper">
        <h2 className="benefits-heading">Benefits</h2>

        <div className="benefits-container">
          {!isMobile && (
            <img src={dottedLine} alt="Dotted Line" className="benefits-dotted-line" />
          )}

          {benefits.map((item, index) => (
            <div key={index} className="benefits-item">
              <img src={item.img} alt={item.title} className="benefits-icon" />
              <h3 className="benefits-title">{item.title}</h3>
              <p className="benefits-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
