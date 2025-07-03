import React, { useState } from "react";
import "./styles/Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Ravi Kumar",
    email: "ravi@example.com",
    phone: "+91 9876543210",
    dob: "1990-05-15",
    gender: "Male",
    preferences: {
      class: "Economy",
      meal: "Vegetarian",
      favoriteDestinations: ["Goa", "Manali", "Jaipur"],
    },
  });

  return (
    <div className="profile-page">
      {/* Profile Overview */}
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-picture"
        />
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Personal Information */}
      <div className="profile-section">
        <h3>Personal Information</h3>
        <div className="info-grid">
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Phone:</strong> {user.phone}</div>
          <div><strong>Date of Birth:</strong> {user.dob}</div>
          <div><strong>Gender:</strong> {user.gender}</div>
        </div>
      </div>

      {/* Travel Preferences */}
      <div className="profile-section">
        <h3>Travel Preferences</h3>
        <div className="info-grid">
          <div><strong>Class:</strong> {user.preferences.class}</div>
          <div><strong>Meal:</strong> {user.preferences.meal}</div>
          <div>
            <strong>Favorites:</strong> {user.preferences.favoriteDestinations.join(", ")}
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="profile-section">
        <h3>Settings</h3>
        <button className="settings-btn">Change Password</button>
        <button className="settings-btn">Notification Settings</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Profile;
