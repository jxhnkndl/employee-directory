// Import modules
import React from 'react';

// Table component function
function Table(props) {
  return (
    <table className="table table-hover table-striped p-0">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
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