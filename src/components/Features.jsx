import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature-card">
        <h3>Skill Assessment</h3>
        <p>Evaluate your skills and interests through our interactive quiz.</p>
      </div>
      <div className="feature-card">
        <h3>Career Matching</h3>
        <p>Get personalized career recommendations based on your profile.</p>
      </div>
      <div className="feature-card">
        <h3>Expert Guidance</h3>
        <p>Access professional tips and insights for career development.</p>
      </div>
    </section>
  );
};

export default Features;