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

  return (
    <table className="table table-hover table-striped p-0">
      <thead>
        <tr>
          <th style={columns.image} scope="col">Image</th>
          <th 
            style={columns.name} 
            onClick={props.handleNameSort} 
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            scope="col">
            Name
            {isVisible && <i className="fas fa-sort-alpha-down ml-2"></i>}
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