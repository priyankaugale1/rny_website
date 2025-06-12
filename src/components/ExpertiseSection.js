
import React from "react";
import "../styles/ExpertiseSection.css";

const ExpertiseSection = ({ items }) => {
    return (
        <section className="expertise-container">
            <div className="expertise-content">
                <h2 className="expertise-heading">✴︎ Expertise</h2>
                <div className="expertise-grid">
                    {items.map((item, index) => (
                        <div key={index} className="expertise-box">
                            <h3 className="expertise-title">▪ {item.title}</h3>
                            <p className="expertise-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
