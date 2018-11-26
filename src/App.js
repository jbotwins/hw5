import React, { Component } from 'react';
import './App.css';
import './bare.min.css';
import './graph.css';

class App extends Component {
  state = {
    curList:[],
    sort: '',
    sortList: ['API', 'Alphabetical', 'Reverse-Alphabetical', 'Low-High', 'High-Low'],
    colors : ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabebe', '#469990', '#e6beff', '#9A6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9'],
    rates: [],
  }

  componentDidMount () {
    const apiURL = 'https://api.exchangeratesapi.io/latest'
    fetch(apiURL).then(response => response.json()).then(data => {
      this.setState({
        sort: 'API',
        base: data.base,
        date: data.date,
      }, () => {
        // 1.0 Loop over fetched data pushing to array with color and index. Calculating minimum. Updating state.
        // 1.1 Add base to rates array
        const base = this.state.base
        const ratesArr = [[base, 1, this.state.colors[0], 0]]
        const ratesMinArr = [1]
        let curList = [base];
        // end 1.1
        // 1.2 Looping, building three arrays. Updating state. Calculating minimum. Updating state.
        let index = 1
        for (const [key, value] of Object.entries(data.rates)) {
          if (index < 20) {
            const color = this.state.colors[index]
            ratesArr.push([key, value, color, index])
            ratesMinArr.push(value)
            curList.push(key);
          } else if (index < 40) {
            const color = this.state.colors[index - 20]
            ratesArr.push([key, value, color, index])
            ratesMinArr.push(value)
            curList.push(key);
          } else if (index < 60) {
            const color = this.state.colors[index - 40]
            ratesArr.push([key, value, color, index])
            ratesMinArr.push(value)
            curList.push(key);
          }
          index++
        }
        // 1.3 Sorting array entries.
        curList = curList.sort();
        // end 1.3
        let minimumValue = Math.min.apply(null, ratesMinArr);
        this.setState({
          rates: ratesArr,
          curList: curList,
          min: minimumValue,
        })
        // end 1.2
        // end 1.0
      })
    })
  }

  onSelectChange = (ev) => {
    // 0.9 Prep fetch. Fetch new data. Build arrays. Sort arrays. Update state.
    const newBase = ev.target.value
    this.setState({
      base: newBase,
    }, () => {
      // 1.1 Build API query URL. Fetch data and update state.
      const baseCur = this.state.base;
      const baseURL = "https://api.exchangeratesapi.io/latest?base=";
      const fetchURL = baseURL + baseCur;
      console.log(fetchURL);
      fetch(fetchURL).then(response => response.json()).then(data => {
          // 1.0 Empty Arrays. Loop over object. Building array data. Calculate minimum. Update state.
          // 1.1 Setting temporary arrays and reconciling 'EUR' API consistency issue.
          const base = data.base
          let ratesArr = []
          const ratesMinArr = []
          let curList = []
          if (base === 'EUR') {
            ratesArr = [[base, 1, this.state.colors[0], 0]]
            curList = [base]
          }
          // end 1.1
          // 1.2 Loop. Determining color value and building rate array.
          let index = 1
          for (const [key, value] of Object.entries(data.rates)) {
            if (index < 20) {
              const color = this.state.colors[index]
              ratesArr.push([key, value, color, index])
              ratesMinArr.push(value)
              curList.push(key);
            } else if (index < 40) {
              const color = this.state.colors[index - 20]
              ratesArr.push([key, value, color, index])
              ratesMinArr.push(value)
              curList.push(key);
            } else if (index < 60) {
              const color = this.state.colors[index - 40]
              ratesArr.push([key, value, color, index])
              ratesMinArr.push(value)
              curList.push(key);
            }
            index++
          }
          // end 1.2
          // 1.3 Sort rate names array. (for Select Menu)
          curList = curList.sort();
          // end 1.3
          // 1.4 Calculating minimum rate.
          let minimumValue = Math.min.apply(null, ratesMinArr);
          // end 1.4
          // 1.8 Update state.
          this.setState({
            rates: ratesArr,
            curList: curList,
            min: minimumValue,
            date: data.date,
            // end 1.8
          }, () => {
            // 1.6 Sort rates data based on current sort option
            // Can't fake this - this.onSortChange(this.state.sort)
            // 1.1 Store new value in variable. Update state. Run sort method. Update state.
            const sort = this.state.sort
              // 1.3 Store current data in array. Run sort.
              const ratesArr = this.state.rates
              if (sort === "Alphabetical") {
                ratesArr.sort()
              } else if (sort === "Reverse-Alphabetical") {
                ratesArr.reverse()
              } else if (sort === "High-Low") {
                ratesArr.sort(function(a, b) {
                  return a[1] - b[1];
                })
              } else if (sort === "Low-High") {
                ratesArr.sort(function(a, b) {
                  return b[1] - a[1];
                })
              } else if (sort === "API") {
                ratesArr.sort(function(a, b) {
                  return a[3] - b[3];
                })
              }
              // end 1.3
              // 1.5 Update state
              this.setState({
                rates: ratesArr,
              })
              // end 1.5
            // end 1.1
            // end 1.6
          })
        // end 1.0
      })

    })
    // end 0.9
  }

  onSortChange = (ev) => {
    // 1.1 Store new value in variable. Update state. Run sort method. Update state.
    const newSort = ev.target.value
    this.setState({
      sort: newSort,
    }, () => {
      // 1.3 Store current data in array. Run sort.
      console.log(this.state.sort);
      const ratesArr = this.state.rates
      if (newSort === "Alphabetical") {
        ratesArr.sort()
      } else if (newSort === "Reverse-Alphabetical") {
        ratesArr.reverse()
      } else if (newSort === "High-Low") {
        ratesArr.sort(function(a, b) {
          return a[1] - b[1];
        })
      } else if (newSort === "Low-High") {
        ratesArr.sort(function(a, b) {
          return b[1] - a[1];
        })
      } else if (newSort === "API") {
        ratesArr.sort(function(a, b) {
          return a[3] - b[3];
        })
      }
      // end 1.3
      // 1.5 Update state
      this.setState({
        rates: ratesArr,
      })
      // end 1.5
    })
    // end 1.1
  }

  render() {
    return (
      <div className="wrapper">
        <header>
        <h1>Exchange Rates by {this.state.base} || European Union || November 2018</h1>
          <h2>Date: {this.state.date} || Sorted by: {this.state.sort}</h2>
        </header>
        <h3>Base Currency:</h3>
        <select value={this.state.base} onChange={this.onSelectChange}>
        {
          this.state.curList.map(cur => (
            <option value={cur}>{cur}</option>
          ))
        }
        </select>
        <h3>Sort by:</h3>
        <select value={this.state.sort} onChange={this.onSortChange}>
        {
          this.state.sortList.map(sortOption => (
            <option value={sortOption}>{sortOption}</option>
          ))
        }
        </select>
        <div className="chart">
        {
          this.state.rates.map(([key, value, color, index]) => (
            <div className="currencyContainer">
              <div className="currencyBar" alt={value} style={{background: color, height: ((this.state.min / value) * 100) + '%'}}></div>
              <div className="currencyBarLabel">{key}<span>{value}</span><span>{color}</span><span>{index}</span></div>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default App;
