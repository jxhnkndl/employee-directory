// Import modules
import React from 'react';

// Wrapper component function
function Wrapper(props) {
  return <main className="container">{props.children}</main>;
}

// Export module
export default Wrapper;