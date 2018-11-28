import React from 'react';
import './Header.css';

const Header = (props) => (
  <header className="Header">
    <h1 className="Header-PageTitle">{props.title}</h1>
  </header>
);

export default Header;
