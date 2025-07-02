import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import "./styles/Auth.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await register(formData);
      if (res.data.success || res.status === 200) {
        alert("Registration successful!");
        navigate("/signin");
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="signin-page">
      <form className="signin-box" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Mobile</label>
        <input name="mobile" value={formData.mobile} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} required />

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
