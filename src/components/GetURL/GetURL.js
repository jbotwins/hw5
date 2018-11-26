import React, { Component } from 'react';

class GetURL extends Component {
  componentDidMount () {
    //Log component did mount
    console.log('Hello: GetURL');
  }

  getURL = () => {
    //Setup fetch
    const baseURL = "https://api.exchangeratesapi.io/latest?base="
    let baseAcronym = "EUR";
    let fetchURL = baseURL + baseAcronym;
  }
    //console.log(fetchURL);
  render() {
    this.getURL();
    console.log('Render')
    return (
      console.log('Return')
    );
  }
}

export default GetURL;
