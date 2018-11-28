import React from 'react';
import './Bar.css';

const Bar = (props) => (
  <div className="Bar-Container">
    <div className="Bar-Bar" alt={props.value} style={{background: props.color, height: ((props.min / props.value) * 100) + '%'}}></div>
    <div className="Bar-Label">
      <span className="Bar-Label_visible">{props.name}</span>
      <span className="Bar-Label_invisible">{props.value}value</span>
    </div>
  </div>
);

export default Bar;
