// react
import React from 'react';
// style
import './style.scss';
// image
import chevron from '../../images/chevron.svg';

const Header = () => (
  <div className="header">
    <div className="logo">
      <p>B</p>
    </div>
    <p>Business Name</p>
    <img src={chevron} alt="down"/>
  </div>
);

export default Header;
