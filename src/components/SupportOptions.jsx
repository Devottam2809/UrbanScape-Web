import React from "react";
import "./SupportOptions.css";
import { FaPhone, FaEnvelope, FaComments, FaUsers, FaDownload, FaMobileAlt, FaStar, FaBug } from "react-icons/fa";

function SupportOptions() {
  return (
    <section className="support-options">
      <h2 className="support-title">Need Help? We've Got You Covered!</h2>
      <p className="support-subtitle">Find the right support option for your needs.</p>

      <div className="support-grid">
        {/* Contact Support Section */}
        <div className="support-card">
          <h3>📞 Contact UrbanScape Support</h3>
          <p>Reach us through multiple channels:</p>
          <ul>
            <li><FaPhone className="icon" /> Toll-Free: <strong>1800-123-4567</strong></li>
            <li><FaEnvelope className="icon" /> Email: <a href="mailto:support@urbanscape.com">support@urbanscape.com</a></li>
            <li><FaComments className="icon" /> <a href="#">Live Chat</a> for instant assistance</li>
            <li><FaUsers className="icon" /> <a href="#">Join our Community Forum</a></li>
          </ul>
        </div>

        {/* Device Compatibility & Updates */}
        <div className="support-card">
          <h3>📲 Device Compatibility & Updates</h3>
          <p>Stay up to date with the latest software:</p>
          <ul>
            <li><FaDownload className="icon" /> <a href="#">Download Latest Firmware</a></li>
            <li><FaMobileAlt className="icon" /> <a href="#">Get UrbanScape Mobile App</a></li>
            <li><FaDownload className="icon" /> <a href="#">User Manuals & Guides</a></li>
          </ul>
        </div>

        {/* Customer Feedback & Issue Reporting */}
        <div className="support-card">
          <h3>📝 Customer Feedback & Issue Reporting</h3>
          <p>We value your feedback. Let us know how we can improve:</p>
          <ul>
            <li><FaStar className="icon" /> <a href="#">Rate Your Support Experience</a></li>
            <li><FaBug className="icon" /> <a href="#">Report a Device Issue</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SupportOptions;