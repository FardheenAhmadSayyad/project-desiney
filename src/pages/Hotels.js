import React, { useState } from "react";
import "./styles/Hotels.css";

function Hotels() {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [results, setResults] = useState([]);

  const dummyHotels = [
    {
      id: 1,
      name: "The Leela Palace",
      location: "Delhi",
      price: 6999,
      rating: 4.6,
    },
    {
      id: 2,
      name: "Taj Lands End",
      location: "Mumbai",
      price: 7499,
      rating: 4.5,
    },
  ];

  const handleSearch = () => {
    if (city && checkIn && checkOut) {
      setResults(dummyHotels);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="hotels-page">
      <div className="hotel-search-wrapper">
        <div className="hotel-search-field">
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />
        </div>

        <div className="hotel-search-field">
          <label>Check-In</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="hotel-search-field">
          <label>Check-Out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search Hotels
        </button>
      </div>

      <div className="hotel-results">
        {results.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <div className="hotel-header">
              <h3>{hotel.name}</h3>
              <span className="hotel-rating">⭐ {hotel.rating}</span>
            </div>
            <div className="hotel-details">
              <p>📍 {hotel.location}</p>
              <p>💰 ₹{hotel.price}/night</p>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
