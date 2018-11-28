import React from 'react';
import './Bar.css';

const Bar = (props) => (
  <div className="currencyContainer">
    <div className="currencyBar" alt={props.value} style={{background: props.color, height: ((props.min / props.value) * 100) + '%'}}></div>
    <div className="currencyBarLabel">
      {props.name}
      <span>{props.value}value</span>
      <span>{props.color}color</span>
      <span>{props.index}index</span>
    </div>
  </div>
);

export default Bar;
