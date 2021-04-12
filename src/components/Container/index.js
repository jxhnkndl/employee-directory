// Import modules
import React from 'react';

// Functional container component
function Container(props) {
  return <div className="container">{props.children}</div>;
}

// Export component
export default Container;