// Import modules
import React, { useState } from 'react';

// Table column widths
const columns = {
  image: {
    width: '10%'
  },
  name: {
    width: '30%'
  },
  phone: {
    width: '20%'
  },
  email: {
    width: '30%'
  },
  dob: {
    width: '10%'
  }
}

// Table component function
function Table(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAscending, setIsAscending] = useState(false);

  return (
    <table className="table table-hover table-striped p-0">
      <thead>
        <tr>
          <th style={columns.image} scope="col">Image</th>
          <th 
            style={columns.name} 
            // Sort the rows by name and toggle the order state
            onClick={() => {
              props.handleNameSort();
              setIsAscending(!isAscending);
            }} 
            // Only show the icons when the field is hovered over
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            scope="col">
            Name
            {/* Determine which icon to show based on how rows are currently sorted/ordered */}
            {(isVisible && isAscending) && <i className="fas fa-sort-alpha-up ml-2"></i>}
            {(isVisible && !isAscending) && <i className="fas fa-sort-alpha-down ml-2"></i>}
          </th>
          <th style={columns.phone} scope="col">Phone</th>
          <th style={columns.email} scope="col">Email</th>
          <th style={columns.dob} scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

// Export Table
export default Table;