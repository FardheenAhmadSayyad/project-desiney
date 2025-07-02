// File: src/pages/Trains.js
import React, { useState } from "react";
import "./styles/Trains.css";

function Trains() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const dummyTrains = [
    {
      id: 1,
      trainName: "Rajdhani Express",
      number: "12345",
      departure: "06:00 AM",
      arrival: "02:00 PM",
      duration: "8h",
      price: 799,
      rating: 4.5,
    },
    {
      id: 2,
      trainName: "Shatabdi Express",
      number: "12001",
      departure: "09:00 AM",
      arrival: "05:00 PM",
      duration: "8h",
      price: 899,
      rating: 4.2,
    },
  ];

  const handleSearch = () => {
    if (from && to && date) {
      setResults(dummyTrains);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="trains-page">
      <div className="train-search-wrapper">
        <div className="train-search-field">
          <label>From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Departure station"
          />
        </div>

        <div className="train-search-field">
          <label>To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Arrival station"
          />
        </div>

        <div className="train-search-field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>Search Trains</button>
      </div>

      <div className="train-results">
        {results.map((train) => (
          <div className="train-card" key={train.id}>
            <div className="train-header">
              <h3>{train.trainName} <span>({train.number})</span></h3>
              <span className="train-rating">⭐ {train.rating}</span>
            </div>
            <div className="train-details">
              <p>🛤 {train.departure} → {train.arrival} ({train.duration})</p>
              <p>💰 ₹{train.price}</p>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trains;
