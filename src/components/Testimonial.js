import React from "react";
import "../styles/Testimonial.css"; 
import testimonials from "../data/testimonialData"; 
import quotes from "../assets/quoteIcon.svg"; 
const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2>✴ What they say</h2>

        {testimonials.map((item, index) => (
          <div className="testimonial-content" key={index}>
            <div className="testimonial-profile">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.company}</p>
              </div>
            </div>

            <div className="testimonial-text">
              <img src={quotes} className="quote-mark"/>
              <p>{item.text}</p>

              <div className="testimonial-arrows">
                <button className="arrow-btn">←</button>
                <button className="arrow-btn">→</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
