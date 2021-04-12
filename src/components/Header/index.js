// Import modules
import React from 'react';
import './style.css';

// Functional header component
function Header() {
  return (
    <header className="p-4 mb-3">
      <h1 className="mb-0 text-center text-light">
        directory
        <i id="icon-header-yellow" className="fas fa-comment-dots ml-2"></i>
        <i id="icon-header-orange" className="fas fa-comment-dots ml-2"></i>
      </h1>
    </header>
  );
}

// Export component
export default Header;