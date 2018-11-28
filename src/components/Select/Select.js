import React from 'react';
import './Select.css';

const Select = (props) => (
  <div>
  <h3>{props.title}</h3>
  <select value={props.value} onChange={props.onChange}>
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
