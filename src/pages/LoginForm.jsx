import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Import CSS file

const Login = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("User Logged In:", user);
    setShow(false);
    navigate("/"); // Redirect to Home Page after login
  };

  // Handle Close (Redirect to the previous page)
  const handleClose = () => {
    navigate(-1); // Redirects user back to the previous page
  };

  return (
    <div className="container">
      {show && (
        <div className="overlay">
          <div className="login-box">
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>
            <h2 className="text-center">Welcome Back</h2>

            <form onSubmit={handleLogin} className="form">
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={user.email}
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
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
