// Import modules
import React from 'react';
import './style.css';

// Functional header component
function Header() {
  return (
    <header className="p-4 mb-3">
      <h1 className="mb-0 text-center text-light">
        directory
        <i className="fas fa-comment-dots yellow ml-2"></i>
        <i className="fas fa-comment-dots orange ml-2"></i>
      </h1>
    </header>
  );
}

// Export component
export default Header;