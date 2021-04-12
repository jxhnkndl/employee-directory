// Import modules
import React, { useState } from 'react';
import './style.css';

// Functional table component
function Table(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAscending, setIsAscending] = useState(false);

  return (
    <table className="table table-striped table-responsive-md p-0">
      <thead className="text-light">
        <tr>
          <th id="col-image" scope="col">
            <p className="mb-0">Image</p>
          </th>
          <th
            id="col-name"
            // Sort the rows by name and toggle the order state
            onClick={() => {
              props.handleNameSort();
              setIsAscending(!isAscending);
            }}
            // Only show the icons when the field is hovered over
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            scope="col"
          >
            <i id="sort-icon" className="fas fa-sort mr-2"></i>
            <p className="mb-0 d-inline-block">Name</p>
            {/* Determine which icon to show based on how rows are currently sorted/ordered */}
            {isVisible && isAscending && (
              <i className="fas fa-sort-alpha-up ml-2"></i>
            )}
            {isVisible && !isAscending && (
              <i className="fas fa-sort-alpha-down ml-2"></i>
            )}
          </th>
          <th id="col-phone" scope="col">
            <p className="mb-0">Phone</p>
          </th>
          <th id="col-email" scope="col">
            <p className="mb-0 px-2">Email</p>
          </th>
          <th id="col-dob" scope="col">
            <p className="mb-0">DOB</p>
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

// Export component
export default Table;
