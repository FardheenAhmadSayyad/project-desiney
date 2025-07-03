// File: src/pages/SignUp.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/userSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles/Auth.css";

const SignUp = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    if (!mobile) err.mobile = "Mobile number is required";
    if (step === 2 && !otp) err.otp = "OTP is required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    if (step === 1) {
      alert("OTP sent to your number");
      setStep(2);
    } else {
      if (otp === "1234") {
        dispatch(loginSuccess({ mobile }));
        alert("Sign Up successful!");
        navigate("/");
      } else {
        alert("Invalid OTP");
      }
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Sign Up</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="step-container">
            <div
              className="step-slider"
              style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
            >
              {/* Step 1: Mobile Number */}
              <div className="step-panel">
                <label>Mobile Number</label>
                <PhoneInput
                  country="in"
                  value={mobile}
                  onChange={setMobile}
                  inputClass={errors.mobile ? "error" : ""}
                  inputStyle={{ width: "100%" }}
                  placeholder="Enter mobile number"
                />
                {errors.mobile && <span className="error-text">{errors.mobile}</span>}
              </div>

              {/* Step 2: OTP */}
              <div className="step-panel">
                <label>OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className={errors.otp ? "error" : ""}
                />
                {errors.otp && <span className="error-text">{errors.otp}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="signin-btn">
            {step === 1 ? "Send OTP" : "Sign Up"}
          </button>

          {step === 2 && (
            <p className="back-link" onClick={() => setStep(1)}>
              ← Back
            </p>
          )}

          <p className="signup-link">
            Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;