import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiGooglepay, SiVisa } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscription Section */}
        <div className="footer-subscribe">
          <h2>Subscribe to UrbanScape</h2>
          <p>Stay up-to-date with the latest smart home innovations.</p>
          <div className="footer-input">
            <input type="email" placeholder="Email Address" />
            <button>→</button>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3>Products</h3>
            <ul>
              <li>Smart Lighting</li>
              <li>Security Systems</li>
              <li>Smart Plugs</li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment-methods">
          <h3>We Accept</h3>
          <div className="payment-icons">
            <SiVisa className="visa-icon" />
            <SiGooglepay className="gpay-icon" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>©2025 UrbanScape – All rights reserved. Privacy Policy | Terms of Use.</p>
      </div>
    </footer>
  );
}

export default Footer;
