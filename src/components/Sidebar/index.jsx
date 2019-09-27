// react
import React from 'react';
// router
import { Link } from 'react-router-dom';
// style
import './style.scss';
// image
import dashboard from '../../images/dashboard1.svg';
import balances from '../../images/balances.svg';
import payment from '../../images/payment.svg';

const Sidebar = () => (
  <div>
    <div className="sidebar">
      <div className="link active">
        <Link to="/">
          <img src={dashboard} alt="dashboard"/> Dashboard
        </Link>
      </div>
      <div className="link">
        <Link to="/balances">
          <img src={balances} alt="dashboard"/> Balances
        </Link>
      </div>
      <div className="link">
        <Link to="/">
          <img src={payment} alt="dashboard"/> Payments
        </Link>
      </div>
      <div className="link">
        <Link to="/transfers">
          <img src={payment} alt="dashboard"/> Transfers
        </Link>
      </div>
      <div className="link">
        <Link to="/">
          <img src={payment} alt="dashboard"/> Developers
        </Link>
      </div>
      <div className="link">
        <Link to="/">
          <img src={payment} alt="dashboard"/> Settings
        </Link>
      </div>
    </div>
    <div className="payment">
      <i className="fas fa-plus"></i>
      <p>Accept payment</p>
    </div>
  </div>
);

export default Sidebar;
