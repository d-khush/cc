import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Perfect Career Path</h1>
        <p>Take our comprehensive skill assessment quiz and get personalized career recommendations tailored to your unique abilities and interests.</p>
        <a href="/quiz" className="cta-button">Start Quiz</a>
      </div>
    </section>
  );
};

export default Hero;