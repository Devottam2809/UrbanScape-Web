import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Moduleconnection from "../components/Moduleconnection";
import Pricing from "../components/Pricing";
import "./Product.css"; // Import custom CSS

function Product() {
  return (
    <>
      <div className="hero-section">
        {/* Background Image */}
        <div className="hero-bg"></div>

        {/* Content */}
        <div className="hero-content text-center text-white">
          <h1 className="hero-title">Discover Smart Living</h1>
          <p className="hero-subtitle">
            Upgrade your home with cutting-edge automation technology.
          </p>

          <NavLink to="/shop" className="btn btn-warning btn-lg hero-button">
            Shop Now
          </NavLink>
        </div>
      </div>
      <Moduleconnection />
      <Pricing />
    </>
  );
}

export default Product;
