// Import modules
import React from 'react';

// Functional search input component
function SearchInput(props) {
  return (
    <div className="form-group py-4">
      <input 
        className="form-control" 
        id="search" 
        type="text" 
        name="search"
        placeholder="Search by name or phone number"
        value={props.value}
        onChange={props.handleInputChange}
      />
    </div>
  );
}

// Export component
export default SearchInput;
