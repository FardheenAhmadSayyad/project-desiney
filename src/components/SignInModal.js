import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../pages/styles/Auth.css";

const SignInModal = ({ onClose }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({ mobile: false, otp: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = {
      mobile: mobile.trim() === "",
      otp: otp.trim() === "",
    };
    setErrors(validation);
    if (!validation.mobile && !validation.otp) {
      alert("Signed in successfully!");
      onClose(); // close modal on success
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Sign In</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className={errors.mobile ? "error" : ""}
          />
          {errors.mobile && <span className="error-text">Mobile is required</span>}

          <label>OTP</label>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className={errors.otp ? "error" : ""}
          />
          {errors.otp && <span className="error-text">OTP is required</span>}

          <button type="submit" className="signin-btn">Sign In</button>

          <div className="divider"><span>or</span></div>

          <GoogleLogin
            onSuccess={() => {
              alert("Google Login Successful!");
              onClose();
            }}
            onError={() => alert("Google Login Failed")}
          />

          <p className="signup-link">
            Don’t have an account?{" "}
            <span onClick={() => {
              navigate("/signup");
              onClose();
            }}>
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
