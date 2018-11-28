import React from 'react';
import './Select.css';

const Select = (props) => (
  <div className="Select-Container">
  <h3 className="Select-Title">{props.title}</h3>
  <select className="Select-Menu" value={props.value} onChange={props.onChange}>
    {
      props.options.map(option => (
        <option value={option}>
        {option}
        </option>
      ))
    }
  </select>
  </div>
);

export default Select;
