// Import modules
import React from 'react';

// Search input component function
function SearchInput(props) {
  console.log(props);
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

// Export search input component
export default SearchInput;
