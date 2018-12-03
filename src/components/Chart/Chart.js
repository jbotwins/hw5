import React from 'react';
import './Chart.css';

import Bar from '../Bar/Bar.js';
import ChartControls from '../ChartControls/ChartControls.js';

const Chart = (props) => (
  <div className="Chart-Container">
    <ChartControls
      // This is where Ill split the cable into wires.
      {...props}
    />
    <div className="Chart-Chart">
    {
      props.rates.map(([key, value, color, index]) => (
        <Bar
          min={props.min}
          name={key}
          value={value}
          index={index}
          color={color}
        />
      ))
      }
    </div>
    <div className="Chart-NoteContainer">
      <p className="Chart-DetailBase">Base Currency: {props.base}</p>
      <p className="Chart-DetailDate">Date: {props.date}</p>
      <p className="Chart-DetailSort">Sorted by: {props.sort}</p>
      <p className="Chart-DetailMin">Minimum Currency value: {props.min}</p>
    </div>
  </div>
);

export default Chart;
