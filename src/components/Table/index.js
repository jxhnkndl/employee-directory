// Import modules
import React, { useState } from 'react';

// Import styles
import './style.css';

// Table component function
function Table(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAscending, setIsAscending] = useState(false);

  return (
    <table className="table table-hover table-striped table-responsive-md p-0">
      <thead className="text-light">
        <tr>
          <th id="col-image" scope="col">
            Image
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
            <i id="sort-icon" class="fas fa-sort mr-2"></i>
            Name
            {/* Determine which icon to show based on how rows are currently sorted/ordered */}
            {isVisible && isAscending && (
              <i className="fas fa-sort-alpha-up ml-2"></i>
            )}
            {isVisible && !isAscending && (
              <i className="fas fa-sort-alpha-down ml-2"></i>
            )}
          </th>
          <th id="col-phone" scope="col">
            Phone
          </th>
          <th id="col-email" scope="col">
            Email
          </th>
          <th id="col-dob" scope="col">
            DOB
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

// Export Table
export default Table;
