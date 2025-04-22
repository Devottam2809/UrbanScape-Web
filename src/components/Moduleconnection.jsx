import React from "react";
import "./Moduleconnection.css";

const Moduleconnection = () => {
  return (
    <div className="module-section">
      <h1 className="title">Seamless Smart Home Integration</h1>
      <p className="subtitle">
        Experience the power of automation with interconnected modules.
      </p>

      {/* Animated Module Containers */}
      <div className="modules">
        <div className="module module-1">Hub</div>
        <div className="module module-2">Smart Light</div>
        <div className="module module-3">Security System</div>
        <div className="module module-4">Thermostat</div>
      </div>

      {/* Punchline Appears After Merge */}
      <div className="punchline">Effortless Control, Ultimate Convenience!</div>

      {/* Features */}
      <div className="features">
        <p>⚡ <strong>Faster Response Time</strong></p>
        <p>🔒 <strong>Industry-Leading Security</strong></p>
        <p>📱 <strong>Seamless App Integration</strong></p>
      </div>
    </div>
  );
};

export default Moduleconnection;
