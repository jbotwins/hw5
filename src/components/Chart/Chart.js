import React from 'react';
import './Chart.css';

import Bar from '../Bar/Bar.js';

const Chart = (props) => (
  <div className="Chart-Container">
    <div className="Chart-Chart">
    {
      props.rates.map(([key, value, color, index]) => (
        <Bar
          min={props.min}
          name={key} // originally this was: key={key} and did not work. Why is that?
          value={value}
          index={index}
          color={color}
        />
      ))
      }
    </div>
    <p className="Chart-Note">{props.chartNote}</p>
  </div>
);

export default Chart;
