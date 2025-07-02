// File: src/pages/Flights.js
import React, { useState } from "react";
import "./styles/Flights.css";

function Flights() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const dummyFlights = [
    {
      id: 1,
      airline: "IndiGo",
      flightNumber: "6E 123",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      duration: "2h 30m",
      price: 4599,
      rating: 4.2,
    },
    {
      id: 2,
      airline: "Air India",
      flightNumber: "AI 456",
      departure: "01:00 PM",
      arrival: "03:45 PM",
      duration: "2h 45m",
      price: 4999,
      rating: 4.0,
    },
        {
      id: 1,
      airline: "IndiGo",
      flightNumber: "6E 123",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      duration: "2h 30m",
      price: 4599,
      rating: 4.2,
    },
    {
      id: 2,
      airline: "Air India",
      flightNumber: "AI 456",
      departure: "01:00 PM",
      arrival: "03:45 PM",
      duration: "2h 45m",
      price: 4999,
      rating: 4.0,
    },    {
      id: 1,
      airline: "IndiGo",
      flightNumber: "6E 123",
      departure: "08:00 AM",
      arrival: "10:30 AM",
      duration: "2h 30m",
      price: 4599,
      rating: 4.2,
    },
    {
      id: 2,
      airline: "Air India",
      flightNumber: "AI 456",
      departure: "01:00 PM",
      arrival: "03:45 PM",
      duration: "2h 45m",
      price: 4999,
      rating: 4.0,
    },
  ];

  const handleSearch = () => {
    if (from && to && date) {
      setResults(dummyFlights);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flights-page">
      <div className="flight-search-wrapper">
        <div className="flight-search-field">
          <label>From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Departure city"
          />
        </div>

        <div className="flight-search-field">
          <label>To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Arrival city"
          />
        </div>

        <div className="flight-search-field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>Search Flights</button>
      </div>

      <div className="flight-results">
        {results.map((flight) => (
          <div className="flight-card" key={flight.id}>
            <div className="flight-header">
              <h3>{flight.airline} <span>({flight.flightNumber})</span></h3>
              <span className="flight-rating">⭐ {flight.rating}</span>
            </div>
            <div className="flight-details">
              <p>🛫 {flight.departure} → 🛬 {flight.arrival} ({flight.duration})</p>
              <p>💰 ₹{flight.price}</p>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flights;