// File: src/pages/SignIn.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/userSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles/SignIn.css";
import { GoogleLogin } from "@react-oauth/google";

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ phone: "", otp: "", countryCode: "in" });
  const [errors, setErrors] = useState({});
  const { loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    if (!formData.phone) err.phone = "Mobile number is required";
    if (step === 2 && !formData.otp) err.otp = "OTP is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    if (step === 1) {
     
      setStep(2);
    } else {
      if (formData.otp === "1234") {
        dispatch(loginSuccess({ phone: formData.phone }));
        navigate("/");
      } else {
        alert("Invalid OTP");
      }
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="step-container">
            <div
              className="step-slider"
              style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
            >
              {/* Step 1: Mobile */}
              <div className="step-panel">
                <label>Mobile Number</label>
                <PhoneInput
                  country={formData.countryCode}
                  value={formData.phone}
                  onChange={(val, data) => setFormData((prev) => ({ ...prev, phone: val, countryCode: data.countryCode }))}
                  inputClass={errors.phone ? "error" : ""}
                  inputStyle={{ width: "100%" }}
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
              {/* Step 2: OTP */}
              <div className="step-panel">
                <label>OTP</label>
                <input
                  type="text"
                  value={formData.otp}
                  onChange={(e) => setFormData((prev) => ({ ...prev, otp: e.target.value }))}
                  className={errors.otp ? "error" : ""}
                  placeholder="Enter OTP"
                />
                {errors.otp && <span className="error-text">{errors.otp}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? "Please wait..." : step === 1 ? "Send OTP" : "Sign In"}
          </button>

          {step === 2 && (
            <p className="back-link" onClick={() => setStep(1)}>
              ← Back
            </p>
          )}

          <div className="divider"><span>or</span></div>

          <GoogleLogin
            onSuccess={() => {
             
              dispatch(loginSuccess({ provider: "google" }));
              navigate("/");
            }}
            onError={() => alert("Google Login Failed")}
          />

          <p className="signup-link">
            Don’t have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
