import React from 'react';
import '../style/style.css';  // Ensure the path is correct

const CornerButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="corner-btn-container">
      <button className="corner-btn" onClick={scrollToTop}>
        <i className="ri-arrow-up-s-line"></i>
      </button>
    </div>
  );
};

export default CornerButton;
