import React from 'react';
import '../styles/Works.css'; 
import workData from '../data/workData'; 

const Works = () => {
    return (
        <section className="works-section">
            <div className='works-content'>
                <div className="works-header">
                    <h1>✹ Works</h1>
                    <a href="#">view all</a>
                </div>

                {workData.map((work, index) => (
                    <div className="work-card" key={index}>
                        <img src={work.image} alt={work.title} className="work-image" />
                        <div className="work-content">
                            <div>
                                <h2>{work.title}</h2>
                                <p>{work.description}</p>
                                <div className="tags">
                                    {work.tags.map((tag, idx) => (
                                        <span key={idx} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <button className="case-study-btn">View Case Study</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
