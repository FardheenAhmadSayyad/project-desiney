// src/pages/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./styles/Auth.css"; // Keep your custom styles

const SignIn = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, errormessage } = useSelector((state) => state.user);

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

    if (step === 1) {
      alert("OTP sent successfully!");
      setStep(2);
    } else {
      const result = await dispatch(login({ mobile, otp }));
      if (login.fulfilled.match(result)) {
        alert("Login successful!");
        navigate("/");
      } else {
        alert(result.payload || "Login failed. Try again.");
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
              style={{
                transform: `translateX(-${(step - 1) * 100}%)`,
              }}
            >
              {/* Step 1: Mobile Number */}
              <div className="step-panel">
                <label>Mobile Number</label>
                <PhoneInput
                  country={"in"}
                  value={mobile}
                  onChange={setMobile}
                  inputClass={errors.mobile ? "error" : ""}
                  inputStyle={{ width: "100%" }}
                  placeholder="Enter phone number"
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
                {error && <span className="error-text">{errormessage}</span>}
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
