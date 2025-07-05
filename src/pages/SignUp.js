// File: src/pages/SignUp.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, signUpSuccess } from "../redux/userSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "in",
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    if (step === 1 && !formData.phone) err.phone = "Mobile number is required";
    if (step === 2 && !formData.otp) err.otp = "OTP is required";
    if (step === 3) {
      if (!formData.firstName) err.firstName = "First name is required";
      if (!formData.email) err.email = "Email is required";
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    if (step === 1) {
     
      setStep(2);
    } else if (step === 2) {
      if (formData.otp === "1234") {
        setStep(3);
      } else {
        alert("Invalid OTP");
      }
    } else {
      dispatch(signUpSuccess({ phone: formData.phone, name: formData.firstName }));
      setSuccessMsg("Now you are Desiney World family now!");
      setTimeout(() => navigate("/signin"), 2500);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="step-container">
            <div
              className="step-slider"
              style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
            >
              {/* Step 1: Mobile Number */}
              <div className="step-panel">
                <label>Mobile Number</label>
                <PhoneInput
                  country={formData.countryCode}
                  value={formData.phone}
                  onChange={(val, data) => setFormData((prev) => ({ ...prev, phone: val, countryCode: data.countryCode }))}
                  inputClass={errors.phone ? "error" : ""}
                  inputStyle={{ width: "100%" }}
                  placeholder="Enter mobile number"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              {/* Step 2: OTP */}
              <div className="step-panel">
                <label>OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  className={errors.otp ? "error" : ""}
                />
                {errors.otp && <span className="error-text">{errors.otp}</span>}
              </div>

              {/* Step 3: Personal Details */}
              <div className="step-panel">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "error" : ""}
                  placeholder="Enter first name"
                />
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}

                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                  placeholder="Enter email"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="signup-btn">
            {step === 1 ? "Send OTP" : step === 2 ? "Verify OTP" : "Sign Up"}
          </button>

          {step > 1 && (
            <p className="back-link" onClick={() => setStep(step - 1)}>
              ← Back
            </p>
          )}

          <p className="signin-link">
            Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span>
          </p>

          {successMsg && <p className="success-message">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
