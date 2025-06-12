import React from 'react';
import '../styles/Experience.css';
import experienceData from '../data/experienceData';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="experience-heading">✹ Experience</h2>
        <div className="experience-list">
          {experienceData.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-left">
                <h3>{item.role}</h3>
              </div>
              <div className="experience-right">
                <h4>{item.company}</h4>
                <p>{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
