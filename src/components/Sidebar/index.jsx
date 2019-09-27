// react
import React from 'react';
// style
import './style.scss';
// image
import dashboard from '../../images/dashboard1.svg';
import balances from '../../images/balances.svg';
import payment from '../../images/payment.svg';

const Sidebar = () => (
  <div>
    <div className="sidebar">
      <div className="link">
        <a href="/">
          <img src={dashboard} alt="dashboard"/> Dashboard
        </a>
      </div>
      <div className="link">
        <a href="/">
          <img src={balances} alt="dashboard"/> Payments
        </a>
      </div>
      <div className="link">
        <a href="/">
          <img src={payment} alt="dashboard"/> Transfers
        </a>
      </div>
      <div className="link">
        <a href="/">
          <img src={payment} alt="dashboard"/> Developers
        </a>
      </div>
      <div className="link">
        <a href="/">
          <img src={payment} alt="dashboard"/> Settings
        </a>
      </div>
    </div>
    <div className="payment">
      <i class="fas fa-plus"></i>
      <p>Accept payment</p>
    </div>
  </div>
);

export default Sidebar;
