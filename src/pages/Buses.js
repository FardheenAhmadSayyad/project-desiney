import React, { useState } from "react";
import "./styles/Buses.css";

function Buses() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const dummyBuses = [
    {
      id: 1,
      operator: "VRL Travels",
      type: "Sleeper AC",
      departure: "09:00 PM",
      arrival: "06:00 AM",
      price: 899,
      rating: 4.3,
    },
    {
      id: 2,
      operator: "KSRTC",
      type: "Non-AC Seater",
      departure: "08:00 AM",
      arrival: "02:00 PM",
      price: 499,
      rating: 4.0,
    },
  ];

  const handleSearch = () => {
    if (from && to && date) {
      setResults(dummyBuses);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="buses-page">
      <div className="bus-search-wrapper">
        <div className="bus-search-field">
          <label>From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Enter origin city"
          />
        </div>

        <div className="bus-search-field">
          <label>To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Enter destination city"
          />
        </div>

        <div className="bus-search-field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search Buses
        </button>
      </div>

      <div className="bus-results">
        {results.map((bus) => (
          <div className="bus-card" key={bus.id}>
            <div className="bus-header">
              <h3>{bus.operator}</h3>
              <span className="bus-rating">⭐ {bus.rating}</span>
            </div>
            <div className="bus-details">
              <p>🚌 {bus.type}</p>
              <p>🕘 {bus.departure} → 🕕 {bus.arrival}</p>
              <p>💰 ₹{bus.price}</p>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buses;
