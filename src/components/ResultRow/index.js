// Import modules
import React from 'react';

function ResultRow(props) {
  return (
    <tr key="props.id">
      <th scope="row" className="align-middle">
        <img 
          src={props.image}
          alt="Company headshot"
        />
      </th>
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.phone}</td>
      <td className="align-middle">{props.email}</td>
      <td className="align-middle">{props.dob}</td>
    </tr>
  );
}

// Export component
export default ResultRow;