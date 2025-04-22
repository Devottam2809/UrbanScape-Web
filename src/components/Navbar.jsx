import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa6";
import { FcSupport } from "react-icons/fc";


import "../components/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3 pt-3 pb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          <span className="text-danger fs-2">Urban</span>
          <span className="text-warning fs-2">Scape</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-4 fw-bolder">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FaHome className="me-2 fs-5" />
                <span className="fs-5">Home</span>
              </NavLink>
            </li>
            <li className="nav-item me-4 fw-bolder">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FaLightbulb className="me-2 fs-5" />
                <span className="fs-5">Product</span>
              </NavLink>
            </li>
            <li className="nav-item me-4 fw-bolder">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FaBlog className="me-2 fs-5" />
                <span className="fs-5">Blog</span>
              </NavLink>
            </li>
            <li className="nav-item me-4 fw-bolder">
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <FcSupport className="me-2 fs-5" />
                <span className="fs-5">Support</span>
              </NavLink>
            </li>
          </ul>

          <div className="d-flex">
            <NavLink
              to="/login"
              className="btn btn-outline-primary me-2 fw-bolder"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="btn btn-outline-warning me-2 fw-bolder"
            >
              SignUp
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
