import "bootstrap/dist/css/bootstrap.min.css";
import "./Pricing.css";
import { useEffect, useState } from "react";

function Pricing() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500); // Trigger animation after load
  }, []);

  return (
    <section className="shop-section">
      <h2 className="shop-title">Upgrade to a Smarter Home</h2>
      <p className="shop-subtitle">Choose from a range of smart home products with easy payment options.</p>

      {/* Product Grid with Rolling Animation */}
      <div className="product-grid">
        <div className={`product-card light ${animate ? "animate" : ""}`}>
          <h3>Smart Light</h3>
          <p>Control brightness & color with voice or app.</p>
          <div className="product-options">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-outline-success">EMI Options</button>
          </div>
        </div>

        <div className={`product-card security ${animate ? "animate" : ""}`}>
          <h3>Security Camera</h3>
          <p>24/7 surveillance with motion alerts.</p>
          <div className="product-options">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-outline-success">EMI Options</button>
          </div>
        </div>

        <div className={`product-card thermostat ${animate ? "animate" : ""}`}>
          <h3>Smart Thermostat</h3>
          <p>Auto-adjusts temperature for energy savings.</p>
          <div className="product-options">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-outline-success">EMI Options</button>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <p>We accept:</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" />
        {/*<img src="blob:https://indiadesignsystem.bombaydc.com/2f997b34-0ab6-4fe3-88f6-eb476d367b74" alt="UPI" />*/}
      </div>
    </section>
  );
}


export default Pricing;