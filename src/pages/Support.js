import React from "react";
import "./styles/Support.css"

function Support() {
  return (
    <div className="support-container" > 
      <h1 className="support-title">Need Help? We're Here for You!</h1>
      <p className="support-intro">
        Welcome to the DesineyWorld Support Center. Whether you're booking flights, renting cars, reserving hotels, or planning holiday packages — we’re committed to making your journey smooth.
      </p>

      <div className="support-section">
        <h2>✈️ Flight Support</h2>
        <p>
          Manage your bookings, check flight status, or request cancellations and refunds. We also offer help with rescheduling due to emergencies.
        </p>
      </div>

      <div className="support-section">
        <h2>🚗 Car Rentals</h2>
        <p>
          Learn how to pick up and return your rental vehicle, what documents you’ll need, and how to modify or cancel bookings.
        </p>
      </div>

      <div className="support-section">
        <h2>🚌 Bus Bookings</h2>
        <p>
          Get assistance with bus schedules, e-ticket issues, boarding information, and operator contact details.
        </p>
      </div>

      <div className="support-section">
        <h2>🏨 Hotel Stays</h2>
        <p>
          Need help with hotel reservations, early check-in, late checkout, or special requests? Reach out to our hotel support team.
        </p>
      </div>

      <div className="support-section">
        <h2>🌍 Holiday & Trip Packages</h2>
        <p>
          From itinerary planning to customizing your dream vacation — our travel advisors are here to help with every detail.
        </p>
      </div>

      <div className="support-footer">
        <h3>📞 Contact Us</h3>
        <p>Email: support@desineyworld.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Live Chat: Available 24/7</p>
      </div>
    </div>
  );
}

export default Support;
