import React, { useState } from "react";
import "./SupportHero.css";

import QuickActions from "./QuickActions"; 
import FAQs from "../components/FAQs";
import SupportOptions from "../components/SupportOptions";

function Support() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <section className="support-hero">
        {/* Background Image */}
        <div className="hero-bg"></div>

        {/* Content Overlay */}
        <div className="hero-content">
          <h1 className="hero-title">How Can We Help You?</h1>
          <p className="hero-subtitle">
            Find answers, troubleshoot issues, or connect with our expert
            support team.
          </p>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for FAQs, troubleshooting, or articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </section>
      <QuickActions/>
      <FAQs/>
      <SupportOptions/>
    </>
  );
}

export default Support;
