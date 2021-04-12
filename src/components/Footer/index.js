// Import modules
import React from 'react';
import './style.css';

// Functional component declaration
function Footer() {
  return (
    <footer className="p-3">
      <p className="mb-0 text-center text-light">
        <i id="icon-footer" class="fas fa-exclamation-circle mr-2"></i>
        For Interal Use Only
      </p>
    </footer>
  );
}

// Export component
export default Footer;