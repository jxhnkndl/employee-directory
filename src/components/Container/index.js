// Import modules
import React from 'react';

// Wrapper component constructor
function Container(props) {
  return <div className="container">{props.children}</div>;
}

// Export Wrapper component
export default Container;