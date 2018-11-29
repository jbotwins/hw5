import React, { Component } from 'react';
import './ChartControls.css';

import Select from '../Select/Select.js';

class ChartControls extends Component {

  render() {
    return (
      <div className="ChartControls-Container">
        <Select
          title="Base currency:"
          value={this.props.base}
          options={this.props.curList}
          onChange={this.props.onCurrencyChange}
        />
        <Select
          title="Sort by:"
          value={this.props.sort}
          options={this.props.sortList}
          onChange={this.props.onSortChange}
        />
      </div>
    );
  }
}

export default ChartControls;
