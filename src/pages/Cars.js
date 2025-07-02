// File: src/pages/Cars.js
import React, { useState } from "react";
import "./styles/Cars.css";

function Cars() {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const dummyCars = [
    {
      id: 1,
      name: "Maruti Suzuki Swift",
      type: "Hatchback",
      seats: 5,
      price: 999,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Toyota Innova Crysta",
      type: "SUV",
      seats: 7,
      price: 1499,
      rating: 4.7,
    },
  ];

  const handleSearch = () => {
    if (location && date) {
      setResults(dummyCars);
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="cars-page">
      <div className="car-search-wrapper">
        <div className="car-search-field">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter pickup location"
          />
        </div>

        <div className="car-search-field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search Cars
        </button>
      </div>

      <div className="car-results">
        {results.map((car) => (
          <div className="car-card" key={car.id}>
            <div className="car-header">
              <h3>{car.name}</h3>
              <span className="car-rating">⭐ {car.rating}</span>
            </div>
            <div className="car-details">
              <p>🚗 {car.type}</p>
              <p>👥 Seats: {car.seats}</p>
              <p>💰 ₹{car.price}/day</p>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
