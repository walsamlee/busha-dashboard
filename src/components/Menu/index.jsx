// react
import React from 'react';
// util
import { toSentenceCase } from '../../util/toSentenceCase';
import { getPage } from '../../util/getPage';
// style
import './style.scss';

const Menu = () => {
  const page = getPage();
  return (
    <div className="main">
      <div className="title">
        <h2>{page ? toSentenceCase(page) : 'Dashboard'}</h2>
      </div>
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
};

export default Menu;
