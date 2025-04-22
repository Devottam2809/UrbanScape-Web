import React, { useState } from "react";
import "../components/QuickActions.css";
import { FaPlug, FaTools, FaLock, FaBox } from "react-icons/fa";

const quickActions = [
  { icon: <FaPlug />, title: "Setup & Installation", description: "Guides for installing and setting up smart devices." },
  { icon: <FaTools />, title: "Troubleshooting", description: "Fix common issues, errors, and device connectivity problems." },
  { icon: <FaLock />, title: "Security & Privacy", description: "Learn about data privacy, secure setup, and safety measures." },
  { icon: <FaBox />, title: "Orders & Warranty", description: "Track orders, process returns, refunds, and check warranties." },
];

function QuickActions() {
  return (
    <section className="quick-actions">
      <h2 className="section-title">Quick Support</h2>
      <p className="section-subtitle">Find answers fast in these key support areas</p>
      
      <div className="action-cards">
        {quickActions.map((action, index) => (
          <div key={index} className="action-card">
            <div className="icon">{action.icon}</div>
            <h3 className="action-title">{action.title}</h3>
            <p className="action-description">{action.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickActions;