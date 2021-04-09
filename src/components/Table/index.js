// Import modules
import React from 'react';

// Table component function
function Table() {
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

        <tr>
          <th scope="row" className="align-middle">
            <img 
              src="https://randomuser.me/api/portraits/thumb/men/86.jpg"
              alt="Company headshot"
            />
          </th>
          <td className="align-middle">Clinton Adams</td>
          <td className="align-middle">(095) 414-2335</td>
          <td className="align-middle">clinton.adams@example.com</td>
          <td className="align-middle">10-05-1975</td>
        </tr>

        <tr>
          <th scope="row" className="align-middle">
            <img 
              src="https://randomuser.me/api/portraits/thumb/men/86.jpg"
              alt="Company headshot"
            />
          </th>
          <td className="align-middle">Clinton Adams</td>
          <td className="align-middle">(095) 414-2335</td>
          <td className="align-middle">clinton.adams@example.com</td>
          <td className="align-middle">10-05-1975</td>
        </tr>

        <tr>
          <th scope="row" className="align-middle">
            <img 
              src="https://randomuser.me/api/portraits/thumb/men/86.jpg"
              alt="Company headshot"
            />
          </th>
          <td className="align-middle">Clinton Adams</td>
          <td className="align-middle">(095) 414-2335</td>
          <td className="align-middle">clinton.adams@example.com</td>
          <td className="align-middle">10-05-1975</td>
        </tr>
        
      </tbody>
    </table>
  );
}

// Export Table
export default Table;