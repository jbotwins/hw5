import React from 'react';
import './Header.css';

const Header = (props) => (
  <header className="Header">
    <h1 className="Header-PageTitle">Exchange Rates || European Union</h1>
    <h2 className="Header-PageSubtitle">Base Currency: {props.base}  || Date: {props.date} || Sorted by: {props.sort}</h2>
  </header>
);

export default Header;
