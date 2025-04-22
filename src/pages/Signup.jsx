import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"; // Import styles

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", userData);
    navigate("/"); // Redirect to Home Page after signup
  };

  return (
    <div className="overlay">
      <div className="signup-box animate-signup">
        <button className="close-btn" onClick={() => navigate("/")}>✖</button>
        <h2 className="text-center">Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="phone"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
