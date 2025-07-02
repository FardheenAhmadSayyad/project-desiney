// File: src/pages/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../api/auth";
import "./styles/Auth.css";

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    if (!mobile) err.mobile = "Mobile number is required";
    if (step === 2 && !otp) err.otp = "OTP is required";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      if (step === 1) {
        // Simulate OTP sending or call an actual OTP API if exists
        alert("OTP sent successfully!");
        setStep(2);
      } else {
        // 🔐 Actual login call using your API
        const response = await login(mobile, otp);
        const { token } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          alert("Login successful!");
          navigate("/");
        } else {
          alert("Login failed: Invalid token received.");
        }
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <label>Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter mobile"
                className={errors.mobile ? "error" : ""}
              />
              {errors.mobile && <span className="error-text">{errors.mobile}</span>}
            </>
          )}

          {step === 2 && (
            <>
              <label>OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className={errors.otp ? "error" : ""}
              />
              {errors.otp && <span className="error-text">{errors.otp}</span>}
            </>
          )}

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
              alert("Google Login Successful!");
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
