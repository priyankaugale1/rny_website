import React from "react";
import faqData from "../data/faqData";
import "../styles/Faq.css"; 

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">✸ Frequently asked questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{item.question}</h3>
              {item.answer && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
