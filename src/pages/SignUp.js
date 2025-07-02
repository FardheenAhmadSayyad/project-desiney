import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux/userSlice";
import "./styles/Auth.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, errormessage } = useSelector((state) => state.user);

  const validate = () => {
    const err = {};
    if (!formData.name) err.name = "Name is required";
    if (!formData.email) err.email = "Email is required";
    if (!formData.mobile) err.mobile = "Mobile number is required";
    if (!formData.password || formData.password.length < 6)
      err.password = "Password must be at least 6 characters";
    return err;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const result = await dispatch(signup(formData));
    if (signup.fulfilled.match(result)) {
      alert("Signup successful! Please login.");
      navigate("/signin");
    } else {
      alert(result.payload || "Signup failed. Try again.");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Sign Up</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label>Mobile</label>
          <input
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile"
            className={errors.mobile ? "error" : ""}
          />
          {errors.mobile && <span className="error-text">{errors.mobile}</span>}

          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            className={errors.password ? "error" : ""}
          />
          {errors.password && <span className="error-text">{errors.password}</span>}

          {error && <span className="error-text">{errormessage}</span>}

          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? "Please wait..." : "Sign Up"}
          </button>

          <p className="signup-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")}>Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
