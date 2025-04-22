import React, { useState } from "react";
import "./FAQs.css";
import { FaChevronDown } from "react-icons/fa";

const faqsData = [
  {
    question: "How do I reset my smart device?",
    answer: "To reset your smart device, hold the reset button for 10 seconds until the indicator light blinks. Follow the setup guide to reconfigure it.",
  },
  {
    question: "How do I connect my device to Wi-Fi?",
    answer: "Ensure your Wi-Fi is on a 2.4GHz network. Open the app, select ‘Add Device,’ and follow the instructions to connect.",
  },
  {
    question: "What is the warranty period for UrbanScape products?",
    answer: "All UrbanScape smart home products come with a 1-year warranty. Extended warranties are available for purchase.",
  },
  {
    question: "How do I return a product?",
    answer: "To return a product, visit ‘My Orders’ in your account, select the item, and follow the return instructions. Returns are accepted within 30 days of purchase.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">Find answers to common questions about our smart home products.</p>

      <div className="faq-list">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <FaChevronDown className={`faq-icon ${openIndex === index ? "rotate" : ""}`} />
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQs;