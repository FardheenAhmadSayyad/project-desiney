import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/userSlice";
import { GoogleLogin } from "@react-oauth/google";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../pages/styles/SignIn.css";

const SignInModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ phone: "", otp: "", countryCode: "in" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const err = {};
    if (!formData.phone || formData.phone.length < 10) err.phone = "Valid mobile number is required";
    if (step === 2) {
      if (!formData.otp) err.otp = "OTP is required";
      else if (formData.otp.length !== 4) err.otp = "OTP must be 4 digits";
    }
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    if (step === 1) {
      alert("OTP sent successfully!");
      setStep(2);
    } else {
      if (formData.otp === "1234") {
        dispatch(loginSuccess({ phone: formData.phone }));
        alert("Signed in successfully!");
        onClose();
      } else {
        alert("Invalid OTP");
      }
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
                  onChange={(val, data) => setFormData((prev) => ({
                    ...prev,
                    phone: val,
                    countryCode: data.countryCode
                  }))}
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
                  maxLength={4}
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={(e) => setFormData((prev) => ({ ...prev, otp: e.target.value }))}
                  className={errors.otp ? "error" : ""}
                />
                {errors.otp && <span className="error-text">{errors.otp}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="signin-btn">
            {step === 1 ? "Send OTP" : "Sign In"}
          </button>

          {step === 2 && (
            <p className="back-link" onClick={() => setStep(1)}>
              ← Back
            </p>
          )}

          <div className="divider"><span>or</span></div>

          <GoogleLogin
            onSuccess={() => {
              alert("Google Login Successful!");
              dispatch(loginSuccess({ provider: "google" }));
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
