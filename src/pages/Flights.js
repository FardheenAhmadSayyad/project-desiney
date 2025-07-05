// File: src/pages/Flights.js
import React, { useState } from "react";
import "./styles/Flights.css";

function Flights() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult");
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
  ];

  const handleSearch = () => {
    if (from && to && date) {
      setResults(dummyFlights);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flights-page">
      <div className="flight-search-wrapper">
        {/* From Field */}
        <div className="flight-search-field">
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Departure city"
          />
        </div>

        {/* To Field */}
        <div className="flight-search-field">
          <label htmlFor="to">To</label>
          <input
            id="to"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Arrival city"
          />
        </div>

        {/* Date Picker */}
        <div className="flight-search-field">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Passenger Dropdown */}
        <div className="flight-search-field passenger-select">
          <label htmlFor="passengers">Passengers</label>
          <select
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>1 Adult, 1 Child</option>
            <option>2 Adults, 2 Children</option>
            <option>3 Adults, 1 Child</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Flight Results */}
      <div className="flight-results">
        {results.map((flight) => (
          <div className="flight-card" key={flight.id}>
            <div className="flight-header">
              <h3>
                {flight.airline} <span>({flight.flightNumber})</span>
              </h3>
              <span className="flight-rating">⭐ {flight.rating}</span>
            </div>
            <div className="flight-details">
              <p>
                🛫 {flight.departure} → 🛬 {flight.arrival} ({flight.duration})
              </p>
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
