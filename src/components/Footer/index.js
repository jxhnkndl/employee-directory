// Import modules
import React from 'react';
import './style.css';

// Functional footer component
function Footer() {
  return (
    <footer className="p-3">
      <p className="mb-0 text-center text-light">
        <i className="fas fa-exclamation-circle yellow mr-2"></i>
        For Interal Use Only
      </p>
    </footer>
  );
}

// Export component
export default Footer;