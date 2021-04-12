// Import modules
import React from 'react';
import './style.css';

// Functional result row component
function ResultRow(props) {
  return (
    <tr key={props.id} data-id={props.id}>
      <th scope="row" className="align-middle">
        <img 
          src={props.image}
          alt="Company headshot"
        />
      </th>
      <td className="align-middle">{props.name}</td>
      <td className="align-middle">{props.phone}</td>
      <td className="align-middle">
        <a className="p-2" href={`mailto:${props.email}`}>
          {props.email}
        </a>
      </td>
      <td className="align-middle">{props.dob}</td>
    </tr>
  );
}

// Export component
export default ResultRow;