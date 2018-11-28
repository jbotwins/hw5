import React from 'react';
import './Header.css';

const Header = (props) => (
  <header>
    <h1>Exchange Rates || European Union</h1>
    <h2>Base Currency: {props.base}  || Date: {props.date} || Sorted by: {props.sort}</h2>
  </header>
);

export default Header;
