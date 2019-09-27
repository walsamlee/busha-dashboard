// react
import React from 'react';
// style
import './style.scss';

const Menu = () => (
  <div className="main">
    <h2 className="title">Menu</h2>
    <div className="toggle">
      <i className="fas fa-toggle-on"></i>
      <p>Test mode</p>
    </div>
    <div className="notification">
      <i className="far fa-bell"></i>
      <div className="badge">
        <p>1</p>
      </div>
    </div>
    <div className="user">
      <div className="initial">
        <p>O</p>
      </div>
      <div className="username">
        <p>Oluwatobi Mayowa</p>
      </div>
    </div>
  </div>
);

export default Menu;
