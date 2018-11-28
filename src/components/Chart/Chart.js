import React from 'react';
import './Chart.css';

import Bar from '../Bar/Bar.js';

const Chart = (props) => (
  <div className="chart_Container">
    <div className="chart">
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
    <p>{props.chartNote}</p>
  </div>
);

export default Chart;
