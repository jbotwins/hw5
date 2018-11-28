import React, { Component } from 'react';
import './ChartControls.css';

import Select from '../Select/Select.js';

class ChartControls extends Component {

  render() {
    return (
      <div className="ChartControls-Container">
        <Select
          title="Base currency:"
          value={this.props.state.base}
          options={this.props.state.curList}
          onChange={this.props.onCurrencyChange}
        />
        <Select
          title="Sort by:"
          value={this.props.state.sort}
          options={this.props.state.sortList}
          onChange={this.props.onSortChange}
        />
      </div>
    );
  }
}

export default ChartControls;
