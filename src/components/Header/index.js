// Import modules
import React from 'react';
import './style.css';

// Header component function
function Header() {
  return (
    <header className="p-4">
      <h1 className="mb-0 text-center text-light">
        rollcall
        <i class="fas fa-comment-dots ml-2"></i>
      </h1>
    </header>
  );
}

// Export Header
export default Header;