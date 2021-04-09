// Import modules
import React from 'react';

// Search input component function
function SearchInput() {
  return (
    <div className="form-group py-4">
      <label htmlFor="search-input">Filter employees by name or phone number:</label>
      <input type="text" className="form-control" id="search-input" />
    </div>
  );
}

// Export search input component
export default SearchInput;